import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ComputerEmployeeLogModel } from '../_model/log/ComputerEmployeeLogModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLogService {

  headers =  new HttpHeaders().append('Content-Type', 'application/json');
  api: string = environment.apiUrl + "/employees/logs";

  constructor(private httpClient: HttpClient){
  }

  findAllLogs(): Observable<ComputerEmployeeLogModel[]>{
    return this.httpClient.get<ComputerEmployeeLogModel[]>(this.api, {headers: this.headers});
  }
}
