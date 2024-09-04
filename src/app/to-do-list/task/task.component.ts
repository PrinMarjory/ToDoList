import { Component, Input, Output, EventEmitter} from '@angular/core';
import { TaskInterface } from '../../interfaces/task-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'digi-task',
  standalone: true,
  templateUrl: './task.component.html',
  imports: [CommonModule],
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: TaskInterface; /* ! : not null assertion operator */
  
  //Méthodes
  onButtonValidate() {
    console.log("Bouton validé/invalidé cliqué");
    this.task.done = !this.task.done;
  }
}
