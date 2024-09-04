import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink} from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Title } from '@angular/platform-browser';

// Décorateur avec ses annotations. Ce décorateur fait appel à une directive qui est une classe qui va
// déterminer (via les annotations) le comportement du composant
@Component({
  selector: 'digi-root', //custom element
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  constructor(titleService: Title) {
    titleService.setTitle("TODO List");
  }
}
