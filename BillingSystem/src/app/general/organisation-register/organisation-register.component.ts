import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrganisationService } from 'src/app/Services/organisation.service';
import validateForm from '../helpers/validateforms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisation-register',
  templateUrl: './organisation-register.component.html',
  styleUrls: ['./organisation-register.component.css']
})
export class OrganisationRegisterComponent implements OnInit{

  signUpForm !: FormGroup;
  type1: string="password";
  type2: string="password";
  isText: boolean=false;
  eyeIcon1: string="fa fa-eye-slash";
  eyeIcon2: string="fa fa-eye-slash";

  constructor(private organisationService: OrganisationService, private fb: FormBuilder, private router: Router){}

  settings = {
    actions:{
      add:false,
      edit:false,
      delete:false,
      columnTitle:'Actions',
      custom:[
        { name: 'update', title:'<i class="fa  fa-pencil"></i>' }
      ]
    },
    columns:{
      ClientName:{
        title:'Client name',
      },
      OrganisationName:{
        title:'Organisation Name',
      },
      OrganisationEmailId:{
        title:'Email ID',
      },
      ClientMobileNumber:{
        title:'Mobile Number',
      },
      OrganisationAddress1:{
        title:'Address Line 1',
      },
      OrganisationAddress2:{
        title:'Address Line 2',
      },
      OrganisationStatus:{
        title:'Status',
      },
    },
    attr: {
      class: 'table table-bordered'
    }
  }

  ngOnInit(){
    this.signUpForm = this.fb.group({
      ClientName:['',Validators.required],
      ClientOrganisationName:['',Validators.required],
      OrganisationEmailId:['',Validators.required],
      ClientMobileNumber:['',Validators.required],
      Password:['',Validators.required],
      ReEnterPassword:['',Validators.required],
      OrganisationAddress1:['',Validators.required],
      OrganisationAddress2:['',Validators.required],
      OrganisationStatus:['',Validators.required]
    })

  }

saveUpdateOrganisation(){
  if(this.signUpForm.valid){

  this.organisationService.saveUpdateOrganisation(this.signUpForm.value)
  .subscribe({
    next:(res=>{
      alert(res.message);
      this.signUpForm.reset();
      this.router.navigate(['login'])
    }),
    error:(err=>{
      alert(err.error.message)
    })
  })

}
else{
  //throw the error using toastr and with required fields
  validateForm.validateAllFormFields(this.signUpForm);
  alert("Your form is invalid");

}
}

hideshowrepass(){
  this.isText = ! this.isText;
  this.isText ?this.eyeIcon2="fa-eye" : this.eyeIcon2="fa-eye-slash";
  this.isText ? this.type2="text" : this.type2="password";
}

hideshowpass(){
  this.isText = ! this.isText;
  this.isText ?this.eyeIcon1="fa-eye" : this.eyeIcon1="fa-eye-slash";
  this.isText ? this.type1="text" : this.type1="password";
}

}