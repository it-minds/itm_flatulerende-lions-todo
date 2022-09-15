import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodolistComponent } from './todolist/todolist.component';

export const TODO_LIST_ID = "id";

const routes: Routes = [
  { path: '', component: TodoComponent}, 
  { path: `todolist/:${TODO_LIST_ID}`, component: TodolistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
