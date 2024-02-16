import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const basic_url="http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  register(SignupRequest:any):Observable<any>{
   return  this.http.post(basic_url+"/api/auth/signup",SignupRequest);
  }
  login(loginRequest:any):Observable<any>{
   return this.http.post(basic_url+"/api/auth/login",loginRequest)

  }
}   
