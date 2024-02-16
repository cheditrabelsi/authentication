import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
const basic_url="http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }
  Add(c:any):Observable<any>{
    return  this.http.post(basic_url+"/api/admin/add",c,{headers:this.createAauthorizationHeader()});
   }
   createAauthorizationHeader():HttpHeaders
   {
let authHeader:HttpHeaders=new HttpHeaders();
return authHeader.set('Authorization','Bearer '+StorageService.getToken())
   }
}
