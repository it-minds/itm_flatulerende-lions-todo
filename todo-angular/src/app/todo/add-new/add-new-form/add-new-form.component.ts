import { Component, OnInit, Inject } from '@angular/core';
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
  constructor(private readonly todoService: TodoService) {}

  form: NewTodoForm = {
    todoName: '',
    todoDescription: '',
  };

  onSubmit(): void {
    const newTodo: TodoModel = {
      todoListId: 1,
      todoListName: this.form.todoName,
      todoListDesc: this.form.todoDescription,
      todoListDeleted: false,
      todoTasks: null,
    };

    this.todoService.addTodo(newTodo);
  }

  ngOnInit(): void {}
}
