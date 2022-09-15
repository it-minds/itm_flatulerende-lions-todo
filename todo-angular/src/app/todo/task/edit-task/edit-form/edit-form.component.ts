import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTaskForm } from '../../add-task/add-task-form/add-task-form.component';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
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
