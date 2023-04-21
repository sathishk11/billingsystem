import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationRegisterComponent } from './organisation-register/organisation-register.component';
import { ApplicationInfoPageComponent } from './application-info-page/application-info-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path:'', component:ApplicationInfoPageComponent, pathMatch:'full'},
    {path:'register', component:OrganisationRegisterComponent, pathMatch:'full'},
    {path:'login', component:LoginComponent, pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GeneralRoutingModule { }