import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MatButtonModule } from '@angular/material/button';
import { TaskComponent } from './task/task.component';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [TodoComponent, TodolistComponent, TaskComponent],
  imports: [CommonModule, TodoRoutingModule, MatButtonModule, MatListModule, MatCheckboxModule],
})
export class TodoModule {}
