import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTasksService } from '../data-tasks.service';
import { TaskComponent } from './task/task.component';
import { TaskInterface } from '../interfaces/task-interface';

@Component({
  selector: 'digi-to-do-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'] 
})
export class ToDoListComponent {
  
  @Input() data: string = "";

  fontWeight: string = "lighter";
  tasks!: TaskInterface[];
  title = 'Todo List'; 
  
  constructor(private dataTasksService: DataTasksService) {
    dataTasksService.loadTasks().subscribe({
      next: (tasksFromHttpRequest) => {
        this.tasks = tasksFromHttpRequest;
      },
      error: (errorMsg) => {
        console.error("Erreur lors de la récupération des tâches", errorMsg);
      },
      complete: () => {
        console.log("Récupération des tâches terminée");
      }
    });
  } 

  //Méthodes
  onButtonValidate(taskId: string): void {
    console.log("Bouton valider/invalider cliqué", taskId);
    this.tasks = this.tasks
      .map((task) => {
        if (task.id == taskId) return { ...task, done: !task.done };
        return task;
      })
      .sort((a: TaskInterface, b: TaskInterface) => Number(a.done) - Number(b.done));
  }
}
