import { Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AboutComponent } from './about/about.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

export const routes: Routes = [
    { path: '', component: ToDoListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'newsletter', component: NewsletterComponent } 
];
