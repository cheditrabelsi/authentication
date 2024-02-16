import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../services/admin-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  CarForm!:FormGroup
  constructor(private fb:FormBuilder,private admin:AdminServiceService){
    this.CarForm = this.fb.group({
      prix: ['', [Validators.required,]],
      modele: ['', [Validators.required]],
      matricule: ['', [Validators.required]],
      couleur: ['', [Validators.required]],
      annee: ['', [Validators.required]],
      image:['',Validators.required]
    });
  }
  onSubmit(){
    console.log(this.CarForm.value)
this.admin.Add(this.CarForm.value).subscribe((data)=>{
  console.log(data)
},(e:HttpErrorResponse)=>{
console.log(e.message)
})    
  }
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
