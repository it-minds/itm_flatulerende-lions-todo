import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TaskModel } from 'src/Models/TodoModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskModel = {
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
  @Input() checkboxState: boolean = false;

  @Output() checkedChangedEvent = new EventEmitter<boolean>();
  // @Output() taskCompletedEvent = new EventEmitter<TaskModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onCheckedChange(isChecked: boolean) {
    const newState = !this.checkboxState;
    this.checkedChangedEvent.emit(newState);
    console.log("Calls onCheckedChange!");
  }

  // taskCompleteChanged(task: TaskModel) {
  //   this.taskCompletedEvent.emit(task);
  // }

}
