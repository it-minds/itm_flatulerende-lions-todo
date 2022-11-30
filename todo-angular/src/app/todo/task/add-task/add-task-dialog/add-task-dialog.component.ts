import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddNewDialogComponent } from 'src/app/todo/add-new/add-new-dialog/add-new-dialog.component';
import { TaskModel, TodoModel } from 'src/Models/TodoModel';
import { NewTaskForm } from '../add-task-form/add-task-form.component';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss'],
})
export class AddTaskDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddNewDialogComponent>) {}
  title: string = 'Add New Task';

  @Output() newTask: EventEmitter<NewTaskForm> =
    new EventEmitter<NewTaskForm>();

  onNewTask(addedTask: NewTaskForm) {
    this.dialogRef.close(addedTask);
  }

  ngOnInit(): void {}
}
