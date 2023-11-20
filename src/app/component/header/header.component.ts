import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean = false
constructor(private authService : AuthService, private notifySvc : NotificationService,private router:Router){}
ngOnInit(){ 
  const userCheck = localStorage.getItem("token");
  console.log("USerCheck",userCheck)
  if(userCheck === null){
    this.isLogin= false
  }
  else{
    this.isLogin= true 
  }
  }
  Logout(){
    const msg =this.authService.logout()
    this.notifySvc.showSuccess(`${msg.msg}`)
    this.router.navigate(['/']).then(()=>{
      window.location.reload()
    })

  }
}

