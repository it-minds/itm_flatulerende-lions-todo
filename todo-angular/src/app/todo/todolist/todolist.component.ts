import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskModel, TodoModel } from 'src/Models/TodoModel';
import { TODO_LIST_ID } from '../todo-routing.module';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {

  todoListTasks: TaskModel[] = [];

  panelOpenState = false;   // Panel state (From Angular Materials)

  constructor(private readonly todoService: TodoService, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const todoListId = this.route.snapshot.paramMap.get(TODO_LIST_ID); // Læser parameteren "TODO_LIST_ID" fra URL'en (sat i todo-routing module)
    this.getSpecificTodos(todoListId);
  }

  getSpecificTodos(id: string | null) {
    this.todoService.getSpecificTodo(id).subscribe({
      next: (tasks) => {
        this.todoListTasks = tasks;
      }
    });
  }

  onCheckboxChanged(task: TaskModel) {
    task.taskComplete = !task.taskComplete;
    this.todoService.updateTask(task.todoTaskId, task).subscribe({
      next: () => {
        this.todoListTasks = [
          ...this.todoListTasks.filter((t) => t.todoTaskId !== task.todoTaskId),
          task
        ]
      }
    });
  }
}
