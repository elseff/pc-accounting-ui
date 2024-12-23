import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { DeviceModel } from '../_model/device/DeviceModel';
import { Observable } from 'rxjs';
import { AddDeviceRequest } from '../_model/device/AddDeviceRequest';
import { AddDeviceResponse } from '../_model/device/AddDeviceResponse';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  headers =  new HttpHeaders().append('Content-Type', 'application/json');
    
    
  api: string = environment.apiUrl + "/devices";

  constructor(private httpClient: HttpClient){
  }

  findAllFreeDevices(): Observable<DeviceModel[]> {
    const params:HttpParams =  new HttpParams().set('free','true')
    return this.httpClient.get<DeviceModel[]>(this.api, {headers: this.headers, params: params});
  }

  findAllDevices(): Observable<DeviceModel[]> {
    return this.httpClient.get<DeviceModel[]>(this.api, {headers: this.headers});
  }

  addNewDevice(request: AddDeviceRequest): Observable<AddDeviceResponse> {
    return this.httpClient.post<AddDeviceResponse>(this.api, request, {headers: this.headers});
  }
}
