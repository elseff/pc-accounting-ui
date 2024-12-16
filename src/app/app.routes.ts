import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { DeviceComponent } from './device/device.component';

export const routes: Routes = [
    { path: "computers", component: ComputerComponent},
    { path: "devices", component: DeviceComponent},
    { path: "**", redirectTo: '/computers' },
];
