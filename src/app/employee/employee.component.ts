import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComputerEmployeeLogModel } from '../../_model/log/ComputerEmployeeLogModel';
import { EmployeeLogService } from '../../_service/employee-log.service';
import { subscribe } from 'diagnostics_channel';
import { EmployeeModel } from '../../_model/employee/EmployeeModel';
import { EmployeeService } from '../../_service/employee.service';
import { ComputerModel } from '../../_model/computer/ComputerModel';
import { ComputerService } from '../../_service/computer.service';
import { AddNewEmployeeComponent } from "../add-new-employee/add-new-employee.component";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule, RouterModule, AddNewEmployeeComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees: EmployeeModel[] = []
  isPinClicked: boolean = false;
  isPassClicked: boolean = false;
  availableComps: ComputerModel[] = []
  availableEmployees: EmployeeModel[] = []
  empForPass?: number;
  empForPin?: number;
  constructor(private employeeService: EmployeeService, private computerService: ComputerService){

  }

  findAll(){
    this.employees = []
    this.employeeService.findAllEmployees().subscribe(emps=>{
      emps.forEach(emp=>{
        this.employees.push(emp)
      })
    })
  }

  clickPin(empId: number){
    if(this.empForPin==undefined){
      this.empForPin=empId;
    }else{
      this.empForPin = undefined;
    }
    this.isPinClicked = !this.isPinClicked;
    this.availableComps = []
    if(this.isPinClicked){ 
      this.computerService.findAllFreeComputers().subscribe(comps=>{
        comps.forEach(comp=>{
          this.availableComps.push(comp)
        })
      })
    }
  }

  pinComputer(employeeId: number, compId: number){
    this.availableComps = []
    this.employeeService.pinComputer(employeeId, compId).subscribe(response=>this.findAll())
  }

  unpinComputer(employeeId: number, compId: number){
    this.employeeService.unpinComputer(employeeId, compId).subscribe(response=>this.findAll())
  }

  passResponsibility(from: number, to: number){
    this.availableEmployees = []
    this.employeeService.passResponsibility(from, to).subscribe(r=>this.findAll());
  }

  availableEmployeesFiltered(id: number): EmployeeModel[]{
    this.availableEmployees = this.availableEmployees.filter(e=>e.id!=id);
    return this.availableEmployees;
  }

  clickPass(empId: number){
    if(this.empForPass==undefined){
      this.empForPass=empId;
    }else{
      this.empForPass = undefined;
    }
    this.isPassClicked = !this.isPassClicked;
    this.availableEmployees = []
    if(this.isPassClicked){ 
      this.employeeService.findAllFreeEmployees().subscribe(emps=>{
        emps.forEach(emp=>{
          this.availableEmployees.push(emp);
        })
      })
    }
  }
}
