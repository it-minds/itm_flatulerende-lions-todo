import {
  Component,
  OnInit,
  Inject,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { TodoModel } from 'src/Models/TodoModel';
import { TodoService } from './../../todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NewTodoForm } from '../add-new-form/add-new-form.component';
import { TodoModule } from '../../todo.module';

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
  title: string = 'Add New Todo';
  constructor(public dialogRef: MatDialogRef<AddNewDialogComponent>) {}

  @Output() newTodo: EventEmitter<any> = new EventEmitter<any>();

  onAddTodo(newTodo: TodoModel): void {
    console.log(this.title);
    console.log(newTodo);
    console.log(this.newTodo);

    this.dialogRef.close(newTodo);
  }

  ngOnInit(): void {}
}
