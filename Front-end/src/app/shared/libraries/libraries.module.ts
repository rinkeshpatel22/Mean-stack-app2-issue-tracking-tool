import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEditorModule } from 'ngx-editor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatSortModule, MatPaginatorModule, MatTableModule,
  MatFormFieldModule, MatInputModule, MatSelectModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    NgxEditorModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LibrariesModule { }
