import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { TodoModel } from 'src/Models/TodoModel';
import { TodoService } from './../../todo.service';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../add-new.component';

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

  form: NewTodoForm = {
    todoName: '',
    todoDescription: '',
  };

  @Output() addTodo: EventEmitter<TodoModel> = new EventEmitter<TodoModel>();

  onSubmit(): void {
    const newTodo: TodoModel = {
      todoListId: 1,
      todoListName: this.form.todoName,
      todoListDesc: this.form.todoDescription,
      todoListDeleted: false,
      todoTasks: null,
    };
    console.log(newTodo);

    this.addTodo.emit(newTodo);
  }

  ngOnInit(): void {}
}
