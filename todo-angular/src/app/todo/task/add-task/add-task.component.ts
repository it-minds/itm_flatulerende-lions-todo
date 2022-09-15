import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModel, TodoModel } from 'src/Models/TodoModel';
import { TodoService } from '../../todo.service';
import { TaskComponent } from '../task.component';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { NewTaskForm } from './add-task-form/add-task-form.component';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private readonly todoService: TodoService
  ) {}
  @Input() todoId: string | null = null;
  @Output() newTask: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      minWidth: '350px',
    });

    dialogRef.afterClosed().subscribe((result: NewTaskForm | undefined) => {
      if (result === undefined) return;

      const newTask: TaskModel = {
        todoTaskId: 0,
        taskName: result?.taskName,
        taskDesc: result?.taskDescription,
        taskComplete: false,
        taskDeleted: false,
        todoListId: Number(this.todoId),
      };

      this.todoService.addTask(newTask).subscribe({
        next: (task) => {
          this.newTask.emit(task);
        },
      });
    });
  }
}
