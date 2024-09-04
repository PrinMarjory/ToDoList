import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInterface } from '../interfaces/task-interface';
import { TaskComponent } from './task/task.component';


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
  tasks: TaskInterface[] = [
    {
      id: '1',
      name: 'Faire la vaisselle',
      done: false,
      comment: 'Dépêche toi mon lapin, je ne supporte pas de voir traîner la vaisselle'
    },
    {
      id: '2',
      name: 'Faire le ménage',
      done: true
    }
  ];

  //Méthodes
  onButtonValidate(taskId: string): void {
    console.log("Bouton valider/invalider cliqué", taskId);
    this.tasks.map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
      }
    });
  }
}
