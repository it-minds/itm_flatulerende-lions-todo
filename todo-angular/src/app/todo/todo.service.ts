import { Injectable } from '@angular/core';
import { TodoComponent } from './todo.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubTaskModel, TaskModel, TodoModel } from 'src/Models/TodoModel';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  private readonly todosUrl = 'https://localhost:7277';

  getTodos(): Observable<TodoModel[]> {
    return this.http
      .get<TodoModel[]>(`${this.todosUrl}/todoitems`)
      .pipe(catchError(this.handleError<TodoModel[]>('getTodos', [])));
  }

  addTodo(newTodo: TodoModel): Observable<TodoModel> {
    const { todoListId, ...rest } = newTodo;
    return this.http
      .post<TodoModel>(`${this.todosUrl}/todoitems`, rest)
      .pipe(catchError(this.handleError<TodoModel>('addTodo')));
  }

  getSpecificTodo(todoId: string | null): Observable<TaskModel[]> {
    return this.http
      .get<TaskModel[]>(`${this.todosUrl}/tasks/${todoId}`)
      .pipe(catchError(this.handleError<TaskModel[]>('getSpecificTodo', [])));
  }

  addTask(newTask: TaskModel): Observable<TaskModel> {
    const { todoTaskId, ...rest } = newTask;
    // console.log('Adding task', rest);
    return this.http
      .post<TaskModel>(`${this.todosUrl}/tasks`, rest)
      .pipe(catchError(this.handleError<TaskModel>('addTask')));
  }

  addSubTask(newSubTask: SubTaskModel): Observable<SubTaskModel> {
    const { subTaskId, ...rest } = newSubTask;
    console.log('Adding subtask', rest);

    return this.http
      .post<SubTaskModel>(`${this.todosUrl}/subtasks`, rest)
      .pipe(catchError(this.handleError<SubTaskModel>('addSubTask')));
  }

  updateTask(taskId: number | string, body: TaskModel) {
    return this.http.put<any>(`${this.todosUrl}/tasks/${taskId}`, body);
  }

  updateSubTask(subTaskId: number | string, body: SubTaskModel) {
    return this.http.put<any>(`${this.todosUrl}/subtasks/${subTaskId}`, body);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
