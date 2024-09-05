import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskInterface } from './interfaces/task-interface';
import { TaskPostInterface } from './interfaces/task-interface';
import { Observable, BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTasksService {
  
  static url = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  // Récupération des tâches depuis le serveur http://localhost:3000/tasks
  loadTasks(): Observable<TaskInterface[]> {
    const url = 'http://localhost:3000/tasks';
    const params = { status: 'PENDING' };
    return this.http.get<Array<TaskInterface>>(url, { params });
  }

  // Ajout d'une tâche dans le serveur http://localhost:3000/tasks
  addTask(newTask: TaskPostInterface): Observable<TaskInterface> {
    console.log(`Dans addTask de DataTasksService`, newTask);
    return this.http.post<TaskInterface>(DataTasksService.url, newTask);
  }

  // Envoi des valeurs du formulaire
  private formValues = new BehaviorSubject<any>(null);
  setFormValues(values: any) {
    this.formValues.next(values);
  }
  getFormValues() {
    return this.formValues.asObservable();
  }
}