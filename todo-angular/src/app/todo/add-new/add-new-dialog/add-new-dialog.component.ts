import { Component, OnInit, Inject } from '@angular/core';
import { TodoModel } from 'src/Models/TodoModel';
import { TodoService } from './../../todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NewTodoForm } from '../add-new-form/add-new-form.component';

export interface TodoDialogData {
  title: string;
  form: NewTodoForm;
}

@Component({
  selector: 'add-new-dialog',
  templateUrl: './add-new-dialog.component.html',
  styleUrls: ['./add-new-dialog.component.scss'],
})
export class AddNewDialogComponent implements OnInit {
  constructor() {}
  data: TodoDialogData = {
    title: 'Add New Todo',
    form: {
      todoName: '',
      todoDescription: '',
    },
  };

  testToConsole(): void {
    console.log(this.data);
  }

  ngOnInit(): void {}
}
