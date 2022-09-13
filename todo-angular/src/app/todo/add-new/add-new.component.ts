import { Component, OnInit, Inject } from '@angular/core';
import { TodoModel } from 'src/Models/TodoModel';
import { TodoService } from './../todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog.component';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  _closeDialogVia,
} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  description: string;
}

@Component({
  selector: 'add-new-todo',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent {
  constructor(
    public dialog: MatDialog,
    private readonly todoService: TodoService
  ) {}
  name: string = '';
  description: string = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewDialogComponent, {
      width: '40vw',
      data: { name: this.name, description: this.description },
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      if (result) {
        const newTodo: TodoModel = {
          todoListId: 1,
          todoListName: result.name,
          todoListDesc: result.description,
          todoListDeleted: false,
          todoTasks: null,
        };
        console.log(newTodo);
        this.todoService.addTodo(newTodo);
      }
    });
  }
}
