import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskModel, TodoModel } from 'src/Models/TodoModel';
import { EditTaskForm } from '../edit-form/edit-form.component';

@Component({
  selector: 'edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task: TaskModel
  ) {}

  onUpdatedTask(updatedTask: EditTaskForm) {
    this.dialogRef.close(updatedTask);
  }

  ngOnInit(): void {}
}