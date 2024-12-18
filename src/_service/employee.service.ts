import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../_model/employee/EmployeeModel';
import { AddEmployeeRequest } from '../_model/employee/AddEmployeeRequest';
import { AddEmployeeResponse } from '../_model/employee/AddEmployeeResponse';
import { PinComputerResponse } from '../_model/employee/PinComputerResponse';
import { PassResponsibilityResponse } from '../_model/PassResponsibilityResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  headers =  new HttpHeaders().append('Content-Type', 'application/json');  
  api: string = environment.apiUrl + "/employees";

  constructor(private httpClient: HttpClient) { }

  findAllEmployees(): Observable<EmployeeModel[]> {
    return this.httpClient.get<EmployeeModel[]>(this.api, {headers: this.headers})
  }

  addNewEmployee(addEmployeeRequest: AddEmployeeRequest): Observable<AddEmployeeResponse> {
    return this.httpClient.post<AddEmployeeResponse>(this.api, addEmployeeRequest, {headers: this.headers})
  }

  pinComputer(employeeId: number, computerId: number): Observable<PinComputerResponse>{
    const parameters: HttpParams = new HttpParams().set('computerId', computerId);
    return this.httpClient.post<PinComputerResponse>(this.api + '/' + employeeId + '/pin', null, {headers: this.headers, params: parameters})
  }

  unpinComputer(employeeId: number, computerId: number): Observable<PinComputerResponse>{
    return this.httpClient.post<PinComputerResponse>(this.api + '/' + employeeId + '/unpin', {headers: this.headers})
  }

  passResponsibility(from: number, to: number): Observable<PassResponsibilityResponse> {
    const parameters: HttpParams = new HttpParams().set('from', from).set('to', to);
    return this.httpClient.post<PassResponsibilityResponse>(this.api+'/pass', null, {params: parameters, headers: this.headers})
  }
}
