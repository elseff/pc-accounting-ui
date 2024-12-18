import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { DeviceComponent } from './device/device.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeLogComponent } from './employee-log/employee-log.component';
import { DeviceLogComponent } from './device-log/device-log.component';
import { DocumentComponent } from './document/document.component';

export const routes: Routes = [
    { path: "computers", component: ComputerComponent},
    { path: "devices", component: DeviceComponent},
    { path: "employees", component: EmployeeComponent},
    { path: "documents", component: DocumentComponent},
    { path: "employees/logs", component: EmployeeLogComponent},
    { path: "devices/logs", component: DeviceLogComponent},
    { path: "**", redirectTo: '/computers' },
];
