import { Component } from '@angular/core';
import { ComputerEmployeeLogModel } from '../../_model/log/ComputerEmployeeLogModel';
import { EmployeeLogService } from '../../_service/employee-log.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-log',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule, RouterModule],
  templateUrl: './employee-log.component.html',
  styleUrl: './employee-log.component.css'
})
export class EmployeeLogComponent {
  logs: ComputerEmployeeLogModel[] = []

  constructor(private service: EmployeeLogService){

  }

  findAllLogs(){
    this.logs = []
    this.service.findAllLogs().subscribe(logs=>{
      logs.forEach(log=>{
        this.logs.push(log)
      })
    })
  }
}
