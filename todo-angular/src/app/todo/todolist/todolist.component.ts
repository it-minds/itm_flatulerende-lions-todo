import { Component, HostListener, OnInit } from '@angular/core';
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
  getScreenWidth!: number;
  mdScreenSize: number = 768;
  noSubTasks: boolean = this.todoListTasks.length > 1;
  panelOpenState = false; // Panel state (From Angular Materials)

  constructor(
    private readonly todoService: TodoService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todoListId = this.route.snapshot.paramMap.get(TODO_LIST_ID); // Læser parameteren "TODO_LIST_ID" fra URL'en (sat i todo-routing module)
    this.getScreenWidth = window.innerWidth;
    this.getSpecificTodos(this.todoListId);
  }

  onNewTaskAdded(newTask: TaskModel) {
    this.todoListTasks.push(newTask);
  }

  onTaskUpdated(task: TaskModel) {
    this.todoService.updateTask(task.todoTaskId, task).subscribe({});
  }

  getSpecificTodos(id: string | null) {
    this.todoService.getSpecificTodo(id).subscribe({
      next: (tasks) => {
        this.todoListTasks = tasks;
      },
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
  onCheckboxChanged(task: TaskModel) {
    task.taskComplete = !task.taskComplete;
    this.todoService.updateTask(task.todoTaskId, task).subscribe({
      next: () => {
        this.todoListTasks.forEach((t) => {
          if (t.todoTaskId === task.todoTaskId) {
            t.taskComplete = task.taskComplete;
          }
        });
      },
    });
  }
}
