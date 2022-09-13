import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/Models/TodoModel';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todoList: TodoModel[] = [];

  constructor(private readonly todoService: TodoService) {}

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todoList = todos;
      },
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
