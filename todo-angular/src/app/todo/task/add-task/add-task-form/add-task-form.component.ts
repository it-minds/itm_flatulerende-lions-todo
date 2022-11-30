import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskModel } from 'src/Models/TodoModel';

export type NewTaskForm = {
  taskName: string;
  taskDescription: string;
};
@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent implements OnInit {
  constructor() {}

  @Output() addTask: EventEmitter<NewTaskForm> =
    new EventEmitter<NewTaskForm>();
  form = new FormGroup({
    taskName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],

    }),
    taskDescription: new FormControl<string>('', { nonNullable: true }),
  });

  onSubmit(): void {
    const { taskName, taskDescription } = this.form.getRawValue();

    this.form.getRawValue().taskName;

    const newtask: NewTaskForm = {
      taskName: taskName,
      taskDescription: taskDescription,
    };

    this.addTask.emit(newtask);
  }

  ngOnInit(): void {}
}
