import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrganisationService } from 'src/app/Services/organisation.service';
import validateForm from '../helpers/validateforms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string="password";
  isText: boolean=false;
  eyeIcon: string="fa fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private organisationService: OrganisationService){}


  ngOnInit(){
    this.loginForm = this.fb.group({
      ClientName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  hideshowpass(){
    this.isText = ! this.isText;
    this.isText ?this.eyeIcon="fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text" : this.type="password";
  }

  onLogin(){
    if(this.loginForm.valid){

      //console.log(this.loginForm.value);
      //send the obj to database

      this.organisationService.login(this.loginForm.value)
      .subscribe({
        next:(res=>{
          alert(res.message)
          this.loginForm.reset();
        }),
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
    else{
      //throw the error using toastr and with required fields
      validateForm.validateAllFormFields(this.loginForm);
      alert("Your form is invalid");

    }
  }
}
