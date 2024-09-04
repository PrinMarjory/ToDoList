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
  @Output() validate = new EventEmitter<void>(); /* création de l'événement observable validate */
  
  // Création de la méthode onButtonValidate qui émet (notification next) l'événement validate
  onButtonValidate(): void {
    this.validate.emit();
  }
}
