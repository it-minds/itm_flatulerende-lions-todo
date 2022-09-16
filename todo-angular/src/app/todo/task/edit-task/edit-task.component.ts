import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModel } from 'src/Models/TodoModel';
import { TodoService } from '../../todo.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { EditTaskForm } from './edit-form/edit-form.component';

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
  @Output() newTask = new EventEmitter<TaskModel>();
  @Output() updatedTask = new EventEmitter<TaskModel>();

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      minWidth: '350px',
      data: this.taskItem,
    });

    dialogRef.afterClosed().subscribe((result: EditTaskForm | undefined) => {
      if (result === undefined) return;

      const updatedTask: TaskModel = {
        todoTaskId: this.taskItem!.todoTaskId,
        taskName: result.taskName,
        taskDesc: result.taskDescription,
        taskComplete: this.taskItem!.taskComplete,
        taskDeleted: this.taskItem!.taskDeleted,
        todoListId: this.taskItem!.todoListId,
        subTasks: result.subTasks,
      };

      this.todoService
        .updateTask(this.taskItem!.todoTaskId, updatedTask)
        .subscribe({
          next: () => {
            console.log('updatedTask in edit-task.component', updatedTask);
            this.updatedTask.emit(updatedTask);
          },
        });
      console.log('updatedTask', updatedTask);
    });
  }
}
