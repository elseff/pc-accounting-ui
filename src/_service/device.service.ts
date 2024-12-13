import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { DeviceModel } from '../_model/device/DeviceModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  headers =  new HttpHeaders().append('Content-Type', 'application/json');
    
    
  api: string = environment.apiUrl + "/devices";

  constructor(private httpClient: HttpClient){
  }

  findAllDevices(): Observable<DeviceModel[]> {
    return this.httpClient.get<DeviceModel[]>(this.api, {headers: this.headers});
}
}
