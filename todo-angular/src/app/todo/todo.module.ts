import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TodoComponent, TodolistComponent, TaskComponent],
  imports: [CommonModule, TodoRoutingModule, MatButtonModule],
})
export class TodoModule {}
