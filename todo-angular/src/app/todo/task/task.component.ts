import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from 'src/Models/TodoModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskModel | undefined = {
    todoTaskId: 0,
    taskName: '',
    taskDesc: '',
    taskComplete: false,
    taskDeleted: false,
    taskDeadline: null,
    taskCompletionTime: null,
    todoListId: 0,
    subTasks: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
