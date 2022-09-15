import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { TodoModel } from 'src/Models/TodoModel';
import { TodoService } from './../todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog.component';

import { MatDialog, _closeDialogVia } from '@angular/material/dialog';

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

  @Output() newTodo: EventEmitter<TodoModel> = new EventEmitter<TodoModel>();

  onNewTodoAdded(todo: TodoModel): void {
    this.todoService.addTodo(todo).subscribe({
      next: (todo) => {
        this.newTodo.emit(todo);
      },
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewDialogComponent, {
      minWidth: '350px',
    });

    dialogRef.afterClosed().subscribe((result: TodoModel | undefined) => {
      if (result !== undefined) {
        this.onNewTodoAdded(result);
      }
    });
  }
}
