import { Component, ElementRef, Input, ViewChild, } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.css']
})
export class SharedInputComponent {
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  @Input() label: string = '';
  @Input() fieldType: string = 'text';
  @Input() class: string = 'text';
  @Input() icon: string = 'text';
  @Input() validationData: any;
  @Input() maxLength:any
  showPassword!:string;
  passwordHide:boolean = false

  visibility(){
    this.showPassword='text'
    this.passwordHide=true
  }
  resetVisibility(){
    this.showPassword='password'
    this.passwordHide=false
  }
}
