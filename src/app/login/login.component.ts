import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup
constructor(private fb :FormBuilder,private service:AuthService,private route:Router){
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });
}
onSubmit(){
  console.log(this.loginForm.value)
this.service.login(this.loginForm.value).subscribe((data)=>{
  console.log('data',data);
  if(data!==null){
    const user={
      id:data.userId,
      role:data.userRole  
    }
    StorageService.saveToken(data.jwt)
    StorageService.saveUser(user)
    if(user.role=='Admin'){
      this.route.navigate(["dashboard"])
    }else{
      this.route.navigate(["Acceuil"])
    }
  }
})
}
}
