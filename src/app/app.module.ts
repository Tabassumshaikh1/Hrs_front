import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { ServicesComponent } from './component/services/services.component';
import { GetquoteComponent } from './component/getquote/getquote.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { SharedInputComponent } from './component/shared-input/shared-input.component';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TanckerDashboardComponent } from './component/tancker-dashboard/tancker-dashboard.component';
import { BookTanckerComponent } from './component/book-tancker/book-tancker.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    GetquoteComponent,
    LoginComponent,
    RegisterComponent,
    
    SharedInputComponent,
         DashboardComponent,
         TanckerDashboardComponent,
         BookTanckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right',maxOpened:1 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
