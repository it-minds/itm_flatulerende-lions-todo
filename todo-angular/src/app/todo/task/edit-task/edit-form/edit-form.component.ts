import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor() {}

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

  onSubTasksUpdated(subTasks: SubTaskModel[]) {
    this.task!.subTasks = subTasks;
  }

  onSubmit(): void {
    const { taskName, taskDescription } = this.form.getRawValue();

    this.form.getRawValue().taskName;

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
