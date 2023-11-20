import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { NotificationService } from '../services/notification.service';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor( private authSer : AuthService, private  notifySvc:NotificationService, private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),Validators.minLength(6)]),
    });
  }
  passwordHideShow(){
    
  }
  Submit(){
    try {
      this.authSer.login(this.loginForm.value).subscribe((res:any)=>{
        console.log("Res is",res)
       if(res.status==0){
          this.notifySvc.showSuccess(`${res.msg}`)
          localStorage.setItem('token',JSON.stringify(res.token))
          debounceTime(100);
          // window.location.reload()
          this.router.navigate(["/dashboard"]).then(()=>{
            window.location.reload()
          })
          
        }
       else{
        this.notifySvc.showError(`${res.msg}`)
      }  
    })
  } catch (err) {
      this.notifySvc.showError(err);
    }
  }
  // Add login form submission logic here
}
 

