import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="http://localhost:4000/api/v1/";
  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post(`${this.apiUrl}auth/login`,data)
  }
  register(data:any){  
      return this.http.post(`${this.apiUrl}auth/regis`, data)
    }
  }