import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './general/general.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule} from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GeneralModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxDatatableModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
