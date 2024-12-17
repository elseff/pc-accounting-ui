import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComputerEmployeeLogModel } from '../../_model/log/ComputerEmployeeLogModel';
import { EmployeeLogService } from '../../_service/employee-log.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule, RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  logs: ComputerEmployeeLogModel[] = []

  constructor(private service: EmployeeLogService){

  }
}
