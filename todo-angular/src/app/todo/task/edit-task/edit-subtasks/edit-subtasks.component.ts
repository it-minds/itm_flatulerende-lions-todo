import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { TodoService } from 'src/app/todo/todo.service';
import { SubTaskModel } from 'src/Models/TodoModel';

@Component({
  selector: 'edit-subtasks',
  templateUrl: './edit-subtasks.component.html',
  styleUrls: ['./edit-subtasks.component.scss'],
})
export class EditSubtasksComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  hasSubTasks = false;
  @Input() subTasks?: SubTaskModel[];
  @Input() taskId?: number = 0;
  @Output() subTaskUpdated = new EventEmitter<SubTaskModel>();
  @Output() subTaskAdded = new EventEmitter<SubTaskModel>();

  newSubTaskName = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.minLength(1)],
  });

  onSubTaskCompleted(id: number) {
    if (this.subTasks === undefined) return;

    let subTaskToUpdate;

    this.subTasks.forEach((subTask) => {
      if (subTask.subTaskId === id) {
        subTask.subComplete = !subTask.subComplete;
        subTaskToUpdate = subTask;
      }
    });

    console.log('subtask to update', subTaskToUpdate);

    this.subTaskUpdated.emit(subTaskToUpdate);
  }

  onSubTaskDeleted(subTask: SubTaskModel) {
    this.subTasks = this.subTasks?.filter(
      (s) => s.subTaskId !== subTask.subTaskId
    );
    this.subTaskUpdated.emit(subTask);
  }

  onSubTaskAdded() {
    if (this.subTasks === undefined) {
      return;
    }

    console.log(
      'trying to add a subtask with this name',
      this.newSubTaskName.value
    );

    const newSubTask: SubTaskModel = {
      subTaskId: 0,
      subName: this.newSubTaskName.value,
      subComplete: false,
      subDeleted: false,
      todoTaskId: this.taskId!,
    };

    // this.subTasks.push(newSubTask);
    this.newSubTaskName.reset();

    // this.todoService.addSubTask(newSubTask).subscribe({
    //   next: (task) => {
    //     console.log('new subtask added', task);

    //     this.subTasks?.push(task);
    //     this.subTasksUpdated.emit(this.subTasks);
    //   },
    // });

    this.subTaskAdded.emit(newSubTask);
    this.hasSubTasks = true;
  }

  ngOnInit(): void {
    console.log('subtasks', this.subTasks);
    if (!this.subTasks) this.subTasks = [];
    if (this.subTasks && this.subTasks.length > 0) this.hasSubTasks = true;
  }
}
