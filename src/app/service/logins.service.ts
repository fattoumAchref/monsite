import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginc } from '../loginc';
const url = "http://localhost:3000/loginc"
@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  constructor(private http:HttpClient) { }

  getCars():Observable<Loginc[]>{
    return this.http.get<Loginc[]>(url)
  }
  addProduit(l:Loginc):Observable<Loginc>{
    return this.http.post<Loginc>(url,l);
  }
}
