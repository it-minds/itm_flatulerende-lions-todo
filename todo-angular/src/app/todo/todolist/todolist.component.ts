import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddTaskComponent } from '../task/add-task/add-task.component';
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
  todoListId: string | null = '';
  constructor(
    private readonly todoService: TodoService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todoListId = this.route.snapshot.paramMap.get(TODO_LIST_ID); // Læser parameteren "TODO_LIST_ID" fra URL'en (sat i todo-routing module)

    this.getSpecificTodos(this.todoListId);
  }

  onNewTaskAdded(newTask: TaskModel) {
    console.log(newTask);

    this.todoListTasks.push(newTask);
  }

  getSpecificTodos(id: string | null) {
    this.todoService.getSpecificTodo(id).subscribe({
      next: (tasks) => {
        this.todoListTasks = tasks;
        console.log(this.todoListTasks);
      },
    });
    console.log(`Fetched data for specific todolist ${id}`);
  }

  onCheckboxChanged(task: TaskModel) {
    console.log('parent reacts to checkbox check!');
    this.todoService.updateTask(task.todoTaskId, task).subscribe();
  }
}
