import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TaskModel } from 'src/Models/TodoModel';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task?: TaskModel = {
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

  @Output() checkedChangedEvent = new EventEmitter<TaskModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onCheckedChange(isChecked: boolean) {
    if (this.task === undefined) {
      return;
    }

    this.task.taskComplete = isChecked;
    
    console.log(`Calls onCheckedChange with id: ${this.task.todoTaskId} and ${this.task.taskComplete}!!`);
    
    console.log(this.task.todoTaskId, this.task);
    
    this.checkedChangedEvent.emit(this.task);
  }

}
