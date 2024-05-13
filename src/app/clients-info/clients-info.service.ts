import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientsInfoComponentModel, GetClientsInfo } from './clients-info.component.model';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientsInfoService {
  baseUrl: string = environment.baseUrl;
  ApiKey: string = environment.ApiKey;
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Api-Key', this.ApiKey);

  constructor(private router: Router, private http: HttpClient) {
  }

  GetClientList(): Observable<ClientsInfoComponentModel[]> {
    return this.http.get<ClientsInfoComponentModel[]>(this.baseUrl + 'api/ClientsInfoes/', { headers: this.headers });
  }
}
