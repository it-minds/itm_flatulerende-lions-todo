import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MatButtonModule } from '@angular/material/button';
import { AddNewComponent } from './add-new/add-new.component';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewFormComponent } from './add-new/add-new-form/add-new-form.component';
import { AddNewDialogComponent } from './add-new/add-new-dialog/add-new-dialog.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodolistComponent,
    AddNewComponent,
    AddNewFormComponent,
    AddNewDialogComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
})
export class TodoModule {}
