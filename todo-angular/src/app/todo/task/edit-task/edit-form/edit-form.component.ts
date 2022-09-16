import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/todo/todo.service';
import { SubTaskModel, TaskModel } from 'src/Models/TodoModel';

export type EditTaskForm = {
  taskName: string;
  taskDescription: string;
  subTasks: SubTaskModel[];
};

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  @Input() task?: TaskModel;

  @Output() updateTask: EventEmitter<EditTaskForm> =
    new EventEmitter<EditTaskForm>();
  form = new FormGroup({
    taskName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
    taskDescription: new FormControl<string>('', { nonNullable: true }),
  });

  onSubTaskUpdated(subTask: SubTaskModel) {
    if (this.task === undefined) return;

    // this.task.subTasks = !this.task.subTasks ? [] : [...this.task.subTasks];

    console.log('subTask in edit-form.component', subTask);

    this.todoService.updateSubTask(subTask.subTaskId, subTask).subscribe({
      next: () => {
        if (this.task?.subTasks === undefined) return;
        this.task!.subTasks.forEach((sub) => {
          if (sub.subTaskId === subTask.subTaskId) {
            sub.subName = subTask.subName;
            sub.subComplete = subTask.subComplete;
          }
        });
      },
    });
  }

  onSubTaskAdded(subTask: SubTaskModel) {
    if (this.task === undefined) return;

    subTask.subDesc = '';

    this.task.subTasks = !this.task.subTasks
      ? [subTask]
      : [...this.task.subTasks, subTask];

    this.todoService.addSubTask(subTask).subscribe({
      next: (sub) => {
        // this.task!.subTasks?.push(sub);
      },
    });

    // this.task!.subTasks = subTasks;
    // this.todoService.addSubTask(subTasks);
  }

  onSubmit(): void {
    const { taskName, taskDescription } = this.form.getRawValue();

    const updatedTask: EditTaskForm = {
      taskName: taskName,
      taskDescription: taskDescription,
      subTasks: this.task?.subTasks || [],
    };

    this.updateTask.emit(updatedTask);
  }

  ngOnInit(): void {
    this.form.patchValue({
      taskName: this.task?.taskName,
      taskDescription: this.task?.taskDesc,
    });
  }
}
