import { Component, OnInit } from '@angular/core';
import { TaskModel, TodoModel } from 'src/Models/TodoModel';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  currentTask: TaskModel | undefined;

  constructor(private readonly todoService: TodoService) {}

  getTodos() {
    console.log("get specific todolist");
    
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
