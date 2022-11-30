import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { TaskModel, TodoModel } from 'src/Models/TodoModel';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-aggregate-view',
  templateUrl: './aggregate-view.component.html',
  styleUrls: ['./aggregate-view.component.scss']
})
export class AggregateViewComponent implements OnInit {

  noSubTasks: any;
checkedChangedEvent: any;
  
  constructor(private todoService: TodoService) { }
  
  searchBarValue: string = "";
  todoList: TodoModel[] = [];
  selectedTodoLists: TodoModel[] = [];
  aggregateTasks: TaskModel[] = [];
  
  onSearchInputChange(event: string) {
    this.selectedTodoLists = this.todoList?.filter( (todo) => {
      return todo.todoListName.toLowerCase().includes(event.toLowerCase());
    });
    
    this.aggregateTasks = this.selectedTodoLists?.flatMap( x => {
      return x.todoTasks??[];
    });
    
    console.log(this.aggregateTasks);
    
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
  onCheckboxChanged(task: TaskModel) {
    task.taskComplete = !task.taskComplete;
    this.todoService.updateTask(task.todoTaskId, task).subscribe();
  }
}
