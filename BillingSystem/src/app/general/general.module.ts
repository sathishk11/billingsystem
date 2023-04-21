import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationRegisterComponent } from './organisation-register/organisation-register.component';
import { GeneralRoutingModule } from './general-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TableModule } from 'ngx-easy-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ApplicationInfoPageComponent } from './application-info-page/application-info-page.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    OrganisationRegisterComponent,
    ApplicationInfoPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    TableModule,
    NgxDatatableModule,
    Ng2SmartTableModule
    
  ]
})
export class GeneralModule { }
