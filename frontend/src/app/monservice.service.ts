import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MonserviceService {

  constructor(private _http:HttpClient) {

   }

    // connect frontend to backend
    apiUrl = 'http://localhost:3000/user';
     //get all data
     getAllData():Observable<any>
     {
         return this._http.get(`${this.apiUrl}`);

     }
    //  create data
    //  creteData(data:any):Observable<any>
    //  {
    //      console.log(data , 'creatapi=>');
    //      return this._http.post(`${this.apiUrl}`, data);
    //  }
    //  delete data
    deleteData(id:any):Observable<any>
    {
      let ids= id;
      return this._http.delete(`${this.apiUrl}/${ids}` );
    }
    //update data
    uppdateData(data:any , id:any):Observable<any>
    {
      let ids= id;
      return this._http.put(`${this.apiUrl}/${ids}`, data);
    }
    //getsingledata?
    getSingleData(id:any):Observable<any>
    {
      let ids=id;
      return this._http.get(`${this.apiUrl}/${ids}`);
    }


    //
    createData(user: Object ): Observable<Object> {

      return this._http.post<Object>(`${this.apiUrl}`, user);
      //return this._http.post(`${this.apiUrl}/${ids}`, user);
    }

}
