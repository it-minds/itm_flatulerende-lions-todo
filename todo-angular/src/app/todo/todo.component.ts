import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {}

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        console.log(todos);
      },
    });
  }
}
