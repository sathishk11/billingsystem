import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrganisationDO } from '../models/OrganisationDO';
import { OutputDO } from '../models/OutputDO';
@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  private baseURL = 'https://localhost:7235/api/User/'

  constructor(private http: HttpClient) { }

  saveUpdateOrganisation(organisationDO: OrganisationDO): Observable<OutputDO>{
    return this.http.post<OutputDO>(this.baseURL+"register", organisationDO);
  }

  login(loginObj: any) : Observable<OutputDO>{
    return this.http.post<OutputDO>(this.baseURL+"authenticate",loginObj)
  }
}
