import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskComponent } from './task/task.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AddNewComponent } from './add-new/add-new.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewFormComponent } from './add-new/add-new-form/add-new-form.component';
import { AddNewDialogComponent } from './add-new/add-new-dialog/add-new-dialog.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { AddTaskDialogComponent } from './task/add-task/add-task-dialog/add-task-dialog.component';
import { AddTaskFormComponent } from './task/add-task/add-task-form/add-task-form.component';
import { EditDialogComponent } from './task/edit-task/edit-dialog/edit-dialog.component';
import { EditFormComponent } from './task/edit-task/edit-form/edit-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    TodoComponent,
    TodolistComponent,
    AddNewComponent,
    AddNewFormComponent,
    AddNewDialogComponent,
    TaskComponent,
    AddTaskComponent,
    EditTaskComponent,
    AddTaskDialogComponent,
    AddTaskFormComponent,
    EditDialogComponent,
    EditFormComponent,
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
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatExpansionModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class TodoModule {}
