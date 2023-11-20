import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  contactForm: FormGroup;
  constructor(private authSer:AuthService,private notifySvc: NotificationService) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      contactno:new FormControl('',[Validators.required,Validators.pattern("[6-9][0-9]{9}"),Validators.maxLength(10)]),
      query:new FormControl('',[Validators.required])
    });
  }
  Submit(formValue:any){
    console.log("FSubmit",formValue)
  }
}
