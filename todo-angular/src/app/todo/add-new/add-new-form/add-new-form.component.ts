import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { TodoModel } from 'src/Models/TodoModel';

import {
  FormControl,
  FormGroup,
  MinLengthValidator,
  MinValidator,
  Validators,
} from '@angular/forms';

export interface NewTodoForm {
  todoName: string;
  todoDescription: string;
}

@Component({
  selector: 'add-new-form',
  templateUrl: './add-new-form.component.html',
  styleUrls: ['./add-new-form.component.scss'],
})
export class AddNewFormComponent implements OnInit {
  constructor() {}
  @Output() addTodo: EventEmitter<TodoModel> = new EventEmitter<TodoModel>();

  form = new FormGroup({
    todoName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
    todoDescription: new FormControl<string>('', { nonNullable: true }),
  });

  onSubmit(): void {
    const { todoName, todoDescription } = this.form.getRawValue();

    this.form.getRawValue().todoName;

    const newTodo: TodoModel = {
      todoListId: 1,
      todoListName: todoName,
      todoListDesc: todoDescription,
      todoListDeleted: false,
      todoTasks: null,
    };

    this.addTodo.emit(newTodo);
  }

  ngOnInit(): void {}
}
