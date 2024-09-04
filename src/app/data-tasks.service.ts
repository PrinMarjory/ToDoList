import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskInterface } from './interfaces/task-interface';

@Injectable({
  providedIn: 'root'
})
export class DataTasksService {
  constructor(private http: HttpClient) {}

  loadTasks(): Observable<TaskInterface[]> {
    const url = 'http://localhost:3000/tasks';
    const params = { status: 'PENDING' };
    return this.http.get<Array<TaskInterface>>(url, { params });
  }
}