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

  onNewTodoAdded(todo: any): void {
    console.log(todo);

    this.todoService.addTodo(todo).subscribe({
      next: (todo) => {
        console.log(todo);
      },
    });
  }

  quickTest(): void {
    console.log('quick test');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewDialogComponent, {
      width: 'dialog-responsive',
      data: { name: this.name, description: this.description },
    });

    dialogRef.afterClosed().subscribe((result: TodoModel | undefined) => {
      if (result !== undefined) {
        this.onNewTodoAdded(result);
      }
    });
  }
}
