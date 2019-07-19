import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../../core/services/auth/auth.service';
import { IssueService } from 'src/app/core/services/issue/issue.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map} from 'rxjs/operators';
import { ExportService } from 'src/app/core/services/export/export.service';
import { Cookie } from 'ng2-cookies';
import { CookieConstants } from 'src/app/core/constants/cookie.constants';
import { DashboardConstants } from 'src/app/core/constants/dashboard.constants';
import { UrlConstants } from 'src/app/core/constants/url.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit {

  public issueList = [];
  public userList = [];
  public notificationList = [];
  public isFilterMyIsuues = false;
  public isLoading = true;
  public isEditIssue = false;
  public forkJoinObservable;

  public displayedColumns = [
    DashboardConstants.status,
    DashboardConstants.issueNumber,
    DashboardConstants.title,
    DashboardConstants.createdDate,
    DashboardConstants.reporter,
    DashboardConstants.assignee,
    DashboardConstants.view
  ];
  public filterOptions = [
    DashboardConstants.allIssues,
    DashboardConstants.myIssues,
    DashboardConstants.inBacklog,
    DashboardConstants.inProgress,
    DashboardConstants.inTest,
    DashboardConstants.done
  ];

  public dataSource: MatTableDataSource<any>;
  public selectedIssue: any;
  public issueModalRef: BsModalRef;
  public notificationModalRef: BsModalRef;

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;
  @ViewChild(DashboardConstants.issueTemplate, null) issueTemplate: TemplateRef<any>;
  @ViewChild(DashboardConstants.notificationTemplate, null) notificationTemplate: TemplateRef<any>;

  constructor(
    private issueService: IssueService,
    private authService: AuthService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private router: Router,
    private exportService: ExportService
  ) { }

  ngOnInit() {
    // Initial api calls to get issues, users and notifications.
    const getUsers = this.authService.getUsers();
    const getIssues = this.issueService.getIssues();
    const getNotifications = this.issueService.getNotifications();
    this.forkJoinObservable = forkJoin(getUsers, getIssues, getNotifications)
      .pipe(map((responseArray: [any[], any[], any[]]) => {
        this.userList = responseArray[0][DashboardConstants.data].map(user => ({ id: user.userId, name: user.userName }));
        this.issueList = responseArray[1][DashboardConstants.data];
        this.notificationList = responseArray[2][DashboardConstants.data];
        return responseArray;
      }));

    this.forkJoinObservable.subscribe(() => {
      this.setDataTable();
    }, err => {
      this.isLoading = false;
      this.toastr.error('Internal server error.');
      this.router.navigate(['']);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.issueList);
      this.setPaginator();
    }, 0);
  }

  // set issue data table with dataSource
  private setDataTable() {
    this.issueList.forEach(issue => {
      const matchedUser = this.userList.find(user => user.id === issue.assigneeUserId);
      issue[DashboardConstants.assigneeName] = matchedUser ? matchedUser.name : '';
    });
    this.dataSource = new MatTableDataSource(this.issueList);
    this.setPaginator();
  }

  // set pagination for issue data table
  private setPaginator(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.isLoading = false;
  }

  // on click create issue button, open issue-form in modal
  public openIssueModal(issue): void {
    this.isEditIssue = issue ? true : false;
    this.selectedIssue = issue;
    this.issueModalRef = this.modalService.show(this.issueTemplate, { class: DashboardConstants.modalLg });
  }

  // cloase the issue-form modal
  public closeIsuueModal(): void {
    if (this.issueModalRef !== undefined) {
      this.issueModalRef.hide();
    }
  }

  // on click notification button, open list of notifications in modal
  public openNotificationModal(): void {
    this.notificationModalRef = this.modalService.show(this.notificationTemplate, { class: DashboardConstants.modalMd });
  }

  // on issue-form submit, save the issue
  public saveIssue(data): void {
    this.isLoading = true;
    this.issueService.createIssue(data.formData).subscribe(response => {
      this.isLoading = false;
      if (response.status === 200) {
        if (data.isFormSubmitted) {
          this.toastr.success('New issue created');
          this.ngOnInit();
          if (this.issueModalRef !== undefined) {
            this.issueModalRef.hide();
          }
        }
      } else {
        this.toastr.error('Issue create failed');
      }
    });
  }

  // on click Export button, export the filtered issue list in excel file
  public exportAsExcelFile(): void {
    this.exportService.exportAsExcelFile(this.dataSource.filteredData, DashboardConstants.IssueReport);
  }

  // on search any issue from search bar, apply filter with serached value
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // on select any filter option, apply filter accordingly
  public onSelecteFilter(selectedFilterOption): void {
    let filteredList;
    switch (selectedFilterOption) {
      case DashboardConstants.allIssues:
        this.dataSource = new MatTableDataSource(this.issueList);
        this.setPaginator();
        break;
      case DashboardConstants.myIssues:
        filteredList = this.issueList.filter(issue => issue.assigneeUserId === Cookie.get(CookieConstants.activeUserId));
        this.dataSource = new MatTableDataSource(filteredList);
        break;
      case DashboardConstants.inBacklog:
      case DashboardConstants.inProgress:
      case DashboardConstants.inTest:
      case DashboardConstants.done:
        filteredList = this.issueList.filter(issue => issue.status === selectedFilterOption);
        this.dataSource = new MatTableDataSource(filteredList);
        break;
      default:
        this.dataSource = new MatTableDataSource(this.issueList);
        break;
    }
    this.setPaginator();
  }

  // on clik of any issue navigate to that issue's description page
  public openIssueDescription(issueNumber): void {
    this.router.navigate([UrlConstants.description + issueNumber]);
  }
}
