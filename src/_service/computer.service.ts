import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { ComputerModel } from "../_model/computer/ComputerModel";
import { AddComputerResponse } from "../_model/computer/AddComputerResponse";
import { AddEmptyComputerRequest } from "../_model/computer/AddEmptyComputerRequest";
import { RemoveDeviceResponse } from "../_model/device/RemoveDeviceResponse";
import { PutDeviceResponse } from "../_model/device/PutDeviceResponse";
import { RemoveDeviceRequest } from "../_model/device/RemoveDeviceRequest";
import { PutDeviceRequest } from "../_model/device/PutDeviceRequest";
import { stringify } from "querystring";

@Injectable({
    providedIn: 'root'
}
)
export class ComputerService {
    
        headers =  new HttpHeaders().append('Content-Type', 'application/json');
    
    
    api: string = environment.apiUrl + "/computers";

    constructor(private httpClient: HttpClient){
    }

    findAllComputers(): Observable<ComputerModel[]> {
        return this.httpClient.get<ComputerModel[]>(this.api, {headers: this.headers});
    }

    addComputer(request: AddEmptyComputerRequest): Observable<AddComputerResponse> {
        return this.httpClient.post<AddComputerResponse>(this.api, request, {headers: this.headers});
    }

    diassembleComputer(computerId: number, toWarehouse: boolean): Observable<string> {
        const options = {headers: this.headers}
        return this.httpClient.post<string>(this.api + '/' + computerId + '/disassemble/'+toWarehouse,options);
    }

    removeDevice(request: RemoveDeviceRequest): Observable<RemoveDeviceResponse> {
        const options = {headers: this.headers}
        return this.httpClient.post<RemoveDeviceResponse>(this.api + '/remove_device',request, options);
    }

    putDevice(request: PutDeviceRequest): Observable<PutDeviceResponse> {
        const options = {headers: this.headers}
        return this.httpClient.post<PutDeviceResponse>(this.api + '/put_device', request, options);
    }   
}   