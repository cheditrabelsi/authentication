import { Injectable, LOCALE_ID } from '@angular/core';
import { window } from 'rxjs';
const User='user'
const Token="token"
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  static saveToken(token:string){
    localStorage.removeItem(Token)
    localStorage.setItem(Token,token)
  }
  static saveUser(user:any){
    localStorage.removeItem(User)
  localStorage.setItem(User,JSON.stringify(user))
  }
  static getUser() {
    const userString = localStorage.getItem(User);
    if(userString!==null){
    return JSON.parse(userString)
    }
    return
  }
  
  static getToken(){
    return localStorage.getItem(Token)
  }
  static getUserRole():string{
const user=this.getUser()
if(user==null){
  return ""
}
return user.role;
  }
  static isAdminLoggedIn():boolean{
if(this.getToken()==null){
  return false
}
const role:string=this.getUserRole()
return role=='Admin';
  }
  static isClientLoggedIn():boolean{
    if(this.getToken()==null){
      return false
    }
    const role:string=this.getUserRole()
    return role=='Client';
      }
}
