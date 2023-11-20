import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { ServicesComponent } from './component/services/services.component';
import { GetquoteComponent } from './component/getquote/getquote.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TanckerDashboardComponent } from './component/tancker-dashboard/tancker-dashboard.component';
import { BookTanckerComponent } from './component/book-tancker/book-tancker.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'service',component:ServicesComponent},
  {path:'getquote',component:GetquoteComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tanckerDash',component:TanckerDashboardComponent},
  {path:'bookTancker/:id',component:BookTanckerComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
