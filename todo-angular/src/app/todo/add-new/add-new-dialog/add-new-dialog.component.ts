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

@Component({
  selector: 'add-new-dialog',
  templateUrl: './add-new-dialog.component.html',
  styleUrls: ['./add-new-dialog.component.scss'],
})
export class AddNewDialogComponent implements OnInit {
  title: string = 'Add New Todo';
  constructor(public dialogRef: MatDialogRef<AddNewDialogComponent>) {}


  onAddTodo(newTodo: TodoModel): void {
    this.dialogRef.close(newTodo);
  }

  ngOnInit(): void {}
}
