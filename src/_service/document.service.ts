import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { DocumentModel } from '../_model/DocumentModel';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  eaders =  new HttpHeaders().append('Content-Type', 'application/json');
  api: string = environment.apiUrl + "/documents";

  constructor(private httpClient: HttpClient){
  }

  findAll(): Observable<DocumentModel[]>{
    return this.httpClient.get<DocumentModel[]>(this.api, {headers: this.eaders})
  }
}
