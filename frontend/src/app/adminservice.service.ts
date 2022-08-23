import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  islogin() {
    throw new Error('Method not implemented.');
  }
  
  
  constructor(private _http:HttpClient) { }
  apiUrl = 'http://localhost:3000/admin';
  getadmin():Observable<any>{
    return this._http.get(`${this.apiUrl}`)
    
  }
}
