import { Injectable } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(todo: TodoComponent) {}

  getTodos() {}
}
