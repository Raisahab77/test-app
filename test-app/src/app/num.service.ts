import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumService {

  constructor(private _http:HttpClient) { }

  postData(num:any):any{
    return this._http.post(`http://localhost:3000/`,num);
  }

  getData(page:any):any{
    return this._http.get(`http://localhost:3000?page=${page}`);
  }
}
