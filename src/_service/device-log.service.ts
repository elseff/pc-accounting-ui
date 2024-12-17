import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { ComputerDeviceLogModel } from '../_model/log/ComputerDeviceLogMode';

@Injectable({
  providedIn: 'root'
})
export class DeviceLogService {

  headers =  new HttpHeaders().append('Content-Type', 'application/json');
  api: string = environment.apiUrl + "/devices/logs";

  constructor(private httpClient: HttpClient){
  }

  findAllLogs(): Observable<ComputerDeviceLogModel[]>{
    return this.httpClient.get<ComputerDeviceLogModel[]>(this.api, {headers: this.headers});
  }
}
