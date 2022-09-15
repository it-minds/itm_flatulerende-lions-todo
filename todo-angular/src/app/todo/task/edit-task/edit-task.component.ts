import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModel } from 'src/Models/TodoModel';
import { TodoService } from '../../todo.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private readonly todoService: TodoService
  ) {}

  @Input() taskItem?: TaskModel;
  @Output() newTask: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      minWidth: '350px',
      data: this.taskItem,
    });

    dialogRef.afterClosed().subscribe((result: TaskModel | undefined) => {
      if (result === undefined) return;

      // const newTask: TaskModel = {
      //   todoTaskId: 0,
      //   taskName: result?.taskName,
      //   taskDesc: result?.taskDescription,
      //   taskComplete: false,
      //   taskDeleted: false,
      //   todoListId: Number(this.todoId),
      // };

      // this.todoService.addTask(newTask).subscribe({
      //   next: (task) => {
      //     this.newTask.emit(task);
      //   },
      // });
    });
  }
}
