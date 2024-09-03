import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInterface } from '../interfaces/task-interface';
import { TaskComponent } from '../task/task.component';


@Component({
  selector: 'digi-to-do-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'] 
})
export class ToDoListComponent {
  
  //Initialisation d'un tableau vide
  @Input() tasks: TaskInterface[] = []; 

  fontWeight: string = "400";
  title = 'TODO LIST'; 

  //Méthodes
  onButtonValidate(taskId: string):void {
    console.log("bouton validé cliqué", taskId);
    this.tasks.map((task) => {
      if(task.id === taskId) {
        task.done = !task.done;
      }
      return task;
    });
  }
}
