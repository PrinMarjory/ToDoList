import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskInterface } from './interfaces/task-interface';

// Décorateur avec ses annotations. Ce décorateur fait appel à une directive qui est une classe qui va
// déterminer (via les annotations) le comportement du composant
@Component({
  selector: 'digi-root', //custom element
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
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
}
