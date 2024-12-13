import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';

export const routes: Routes = [
    { path: "computers", component: ComputerComponent},
    { path: "**", redirectTo: '/computers' },
];
