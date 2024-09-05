import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataTasksService } from '../../data-tasks.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'digi-form-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css',
})

export class FormTaskComponent {
  constructor(private dataTasksService: DataTasksService) { }

  register(formValues: string) {
    console.log(`Formulaire soumis`, formValues);
    // Appel de la méthode du service qui émet la valeur (next)
    this.dataTasksService.setFormValues(formValues);
  }
}