import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SubTaskModel } from 'src/Models/TodoModel';

@Component({
  selector: 'edit-subtasks',
  templateUrl: './edit-subtasks.component.html',
  styleUrls: ['./edit-subtasks.component.scss'],
})
export class EditSubtasksComponent implements OnInit {
  constructor() {}
  hasSubTasks = false;
  @Input() subTasks?: SubTaskModel[];
  @Input() taskId?: number = 0;
  @Output() subTasksUpdated: EventEmitter<SubTaskModel[]> = new EventEmitter<
    SubTaskModel[]
  >();

  newSubTaskName = new FormControl('', {
    nonNullable: true,
    validators: [Validators.minLength(1)],
  });

  onSubTaskCompleted(subTask: SubTaskModel) {
    console.log('subtask completed', subTask);

    const subTaskIndex = this.subTasks?.findIndex(
      (subTask) => subTask.subTaskId === subTask.subTaskId
    );
    if (subTaskIndex !== undefined) {
      this.subTasks![subTaskIndex].subComplete = !subTask.subComplete;
      this.subTasksUpdated.emit(this.subTasks!);
    }
  }

  onSubTaskDeleted(subTask: SubTaskModel) {
    this.subTasks = this.subTasks?.filter(
      (s) => s.subTaskId !== subTask.subTaskId
    );
    this.subTasksUpdated.emit(this.subTasks || []);
  }

  onSubTaskAdded() {
    if (this.subTasks === undefined) {
      return;
    }
    const newSubTask: SubTaskModel = {
      subTaskId: 0,
      subName: this.newSubTaskName.value,
      subComplete: false,
      subDeleted: false,
      todoTaskId: this.taskId!,
    };

    this.subTasks.push(newSubTask);
    this.newSubTaskName.reset();
    this.subTasksUpdated.emit(this.subTasks);
    this.hasSubTasks = true;
  }

  ngOnInit(): void {
    console.log('subtasks', this.subTasks);
    if (!this.subTasks) this.subTasks = [];
    if (this.subTasks && this.subTasks.length > 0) this.hasSubTasks = true;
  }
}
