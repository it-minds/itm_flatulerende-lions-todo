import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/Models/TodoModel';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  todoList: TodoModel[] = [];

  constructor(private readonly todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todoList = todos;
      },
    });
  }
}
