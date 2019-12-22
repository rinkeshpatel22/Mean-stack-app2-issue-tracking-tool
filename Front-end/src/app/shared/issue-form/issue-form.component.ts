import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IssueService } from 'src/app/core/services/issue/issue.service';
import { Cookie } from 'ng2-cookies';
import { HttpEventType } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CookieConstants } from 'src/app/core/constants/cookie.constants';
import { IssueFormConstants } from 'src/app/core/constants/issueForm.constants';
import { UrlConstants } from 'src/app/core/constants/url.constants';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent implements OnInit {

  public attachedFiles = [];
  public fileUploadProgress;
  public issueFormGroup: FormGroup;
  public issueTypes = [
    IssueFormConstants.bug,
    IssueFormConstants.newFeature,
    IssueFormConstants.improvement,
    IssueFormConstants.task
  ];
  public statusList = [
    IssueFormConstants.inBacklog,
    IssueFormConstants.inProgress,
    IssueFormConstants.inReview,
    IssueFormConstants.inTest,
    IssueFormConstants.done
  ];
  public priorityList = [
    IssueFormConstants.highest,
    IssueFormConstants.high,
    IssueFormConstants.medium,
    IssueFormConstants.low,
    IssueFormConstants.lowest
  ];

  @Output() formCloseEvent = new EventEmitter<any>();
  @Output() formSubmitEvent = new EventEmitter<any>();
  @Input() isEditIssue: boolean;
  @Input() selectedIssue: any;
  @Input() userList: any;

  constructor(
    private formBuilder: FormBuilder,
    private issueService: IssueService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {

    if (this.isEditIssue) {
      this.issueFormGroup = this.formBuilder.group({
        issueType: [this.selectedIssue.issueType],
        title: [this.selectedIssue.title, Validators.required],
        description: [this.selectedIssue.description],
        status: [this.selectedIssue.status],
        priority: [this.selectedIssue.priority],
        assigneeUserId: [this.selectedIssue.assigneeUserId],
        estimate: [this.selectedIssue.estimate],
      });

      this.attachedFiles = this.selectedIssue.attachments ? this.selectedIssue.attachments : [];
    } else {
      this.issueFormGroup = this.formBuilder.group({
        issueType: [IssueFormConstants.newFeature],
        title: ['', Validators.required],
        description: [''],
        status: [IssueFormConstants.inBacklog],
        priority: [IssueFormConstants.medium],
        assigneeUserId: [''],
        estimate: [''],
      });
    }
  }

  // called on sumbit the issue-form to create/update the issue
  public saveIssue(isFormSubmittedFlag): void {
    if (!this.issueFormGroup.value[IssueFormConstants.title]) {
      this.toastr.warning('Title is required');
      return;
    }
    if (this.isEditIssue) {
      this.issueFormGroup.value[IssueFormConstants.lastUpdatedDate] = new Date();
      this.issueFormGroup.value[IssueFormConstants.lastUpdatedBy] = Cookie.get(CookieConstants.activeUserName);
    } else {
      this.issueFormGroup.value[IssueFormConstants.reporterName] = Cookie.get(CookieConstants.activeUserName);
      this.issueFormGroup.value[IssueFormConstants.reporterUserId] = Cookie.get(CookieConstants.activeUserId);
    }
    this.issueFormGroup.value[IssueFormConstants.attachments] = this.attachedFiles;
    const selectedAssignee = this.userList.find(user => user.id === this.issueFormGroup.value.assigneeUserId);
    this.issueFormGroup.value[IssueFormConstants.assigneeName] = selectedAssignee ? selectedAssignee.name : '';
    this.formSubmitEvent.emit({ formData: this.issueFormGroup.value, isEditIssue: this.isEditIssue, isFormSubmitted: isFormSubmittedFlag });
  }

  // called on upload attachemt file
  public onFileChange(eventData): void {
    const uploadFile = { file: eventData.target.files.item(0), uploadProgress: '0' };
    const formData = new FormData();
    formData.append(IssueFormConstants.file, uploadFile.file, uploadFile.file.name);
    this.issueService.fileUpload(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = `${(event.loaded / event.total * 100)}%`;
        }
        if (event.type === HttpEventType.Response) {
          const ApiBaseUrl = localStorage.getItem('API_BASE_URL');
          this.attachedFiles.push({
            link: ApiBaseUrl + UrlConstants.FILE_READ + event.body[IssueFormConstants.filename],
            name: event.body[IssueFormConstants.originalFileName],
            dbFileName: event.body[IssueFormConstants.filename]
          });
          this.toastr.success('File uploaded');
        }
      }, err => {
        this.toastr.success('File upload failed, please try again.');
      });
  }

  // on click cancle close the issue-form modal
  public onClickCancel(): void {
    this.formCloseEvent.emit();
  }

  // on click trash icon shown with attchements, remove that attched file
  public removeFile(selectedFIle): void {
    this.issueService.fileDelete(selectedFIle.dbFileName).subscribe(response => {
      this.toastr.success('File removed');
      this.attachedFiles = this.attachedFiles.filter(file => file !== selectedFIle);
      this.saveIssue(false);
    }, err => this.toastr.success('File remove failed'));
  }
}
