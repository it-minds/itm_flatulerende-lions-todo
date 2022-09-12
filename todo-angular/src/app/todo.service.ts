import { Injectable } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  private todosUrl = 'https://localhost:7277';

  getTodos(): Observable<TodoComponent[]> {
    return this.http
      .get<TodoComponent[]>(`${this.todosUrl}/todoitems`)
      .pipe(catchError(this.handleError<TodoComponent[]>('getTodos', [])));
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
