import { Component } from '@angular/core';
import { AddEmployeeRequest } from '../../_model/employee/AddEmployeeRequest';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { EmployeeService } from '../../_service/employee.service';

@Component({
  selector: 'app-add-new-employee',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './add-new-employee.component.html',
  styleUrl: './add-new-employee.component.css'
})
export class AddNewEmployeeComponent {
  request: AddEmployeeRequest = {
    firstName:"",
    lastName:"",
    patronymic:"",
    speciality:"developer"
  }

  constructor(private employeeService: EmployeeService){

  }

  addNewEmployee(){
    this.employeeService.addNewEmployee(this.request).subscribe(r=>console.log())
  }
}
