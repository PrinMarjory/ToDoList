import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTasksService } from '../data-tasks.service';
import { TaskComponent } from './task/task.component';
import { TaskInterface } from '../interfaces/task-interface';
import { TaskPostInterface } from '../interfaces/task-interface';
import { FormTaskComponent } from './form-task/form-task.component';

@Component({
  selector: 'digi-to-do-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, FormTaskComponent],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'] 
})
export class ToDoListComponent {
  
  @Input() data: string = "";

  fontWeight: string = "lighter";
  tasks!: TaskInterface[];
  title = 'Todo List'; 
  
  constructor(private dataTasksService: DataTasksService) {
    // Souscription au service de récupération des tâches
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

    // souscription au service de récupération des valeurs du formulaire et d'envoie de la tâche au serveur
    this.dataTasksService.getFormValues().subscribe({
        next: (newTaskName) => {
          console.log(`newTaskName dans todo-list`, newTaskName);
          const newTaskPost: TaskPostInterface = {
            name: 'tmp',
            done: false,
            comment: '',
            ...newTaskName,
          };
          const newTaskLocal: TaskInterface = {
            id: 'tmp',
            ...newTaskPost,
          };
          // Ajout de la tâche en local
          this.tasks.push(newTaskLocal);
          // Post de la tâche sur le serveur d'API REST
          this.dataTasksService.addTask(newTaskPost).subscribe({
            next: (newTaskFromServer: TaskInterface) => {
              console.log(`newTaskFromServer : `, newTaskFromServer);
              newTaskLocal.id = newTaskFromServer.id;
            },
          });
        },
        error: (error) => {
          console.error(
            `Erreur dans TodoListComponent getFormValuesObservable ${error.message}`
          );
        },
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
