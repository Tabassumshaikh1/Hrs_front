import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private authSer:AuthService,private notifySvc: NotificationService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),Validators.minLength(6)]),
      confirmpassword:new FormControl('',[Validators.required]),
      contactno:new FormControl('',[Validators.required,Validators.pattern("[6-9][0-9]{9}"),Validators.maxLength(10)]),
      address:new FormControl('',[Validators.required])
    });

  }
  Submit(registerForm:any){
    try {
      if(registerForm.invalid){
        this.notifySvc.showError(`All Fields are mandatory Please check once`)
        return 
      }
      this.authSer.register(registerForm.value).subscribe((res:any)=>{
        console.log("Res is",res)
       if(res.status==0){
          this.notifySvc.showSuccess(`${res.msg}`)
       }
       else{
        this.notifySvc.showError(`${res.msg}`)
       }
      
        
      })
    } catch (err) {
      this.notifySvc.showError(err);
    }
  
  }
}