import { Injectable } from '@angular/core';
import { TodoComponent } from './todo.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoModel } from 'src/Models/TodoModel';
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