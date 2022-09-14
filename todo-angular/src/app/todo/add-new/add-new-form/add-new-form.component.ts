import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { TodoModel } from 'src/Models/TodoModel';
import { TodoService } from './../../todo.service';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../add-new.component';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

  todoName = new FormControl('');
  todoDescription = new FormControl('');

  onSubmit(): void {
    const newTodo: TodoModel = {
      todoListId: 1,
      todoListName: this.todoName.value as string,
      todoListDesc: this.todoDescription.value as string,
      todoListDeleted: false,
      todoTasks: null,
    };

    console.log(newTodo);

    this.addTodo.emit(newTodo);
  }

  ngOnInit(): void {}
}
