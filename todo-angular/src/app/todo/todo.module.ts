import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskComponent } from './task/task.component';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AddNewComponent } from './add-new/add-new.component';
import {
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
    TaskComponent
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
    MatCheckboxModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class TodoModule {}
