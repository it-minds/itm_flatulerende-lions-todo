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

  @Input() task?: TaskModel;

  @Output() checkedChangedEvent = new EventEmitter<TaskModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onCheckedChange() {
    
    if (this.task === undefined) {
      return;
    }

    // this.task.taskComplete = isChecked;
    this.checkedChangedEvent.emit(this.task);
  }

}
