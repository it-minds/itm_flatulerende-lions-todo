import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TodoComponent, TodolistComponent],
  imports: [CommonModule, TodoRoutingModule, MatButtonModule],
})
export class TodoModule {}
