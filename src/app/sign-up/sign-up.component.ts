import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm!:FormGroup
  emailExists:boolean=false
  constructor(private fb:FormBuilder,private auth:AuthService){
this.signupForm=this.fb.group({
  nom:['',  Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
 
})
  }
  onSubmit(){
this.auth.register(this.signupForm.value).subscribe((data)=>{
  console.log(data)
},
(e: HttpErrorResponse)=>{

this.emailExists=true
  console.log(e.message)
})   
}
}
