import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-tancker',
  templateUrl: './book-tancker.component.html',
  styleUrls: ['./book-tancker.component.css']
})
export class BookTanckerComponent implements OnInit{
constructor(private route : ActivatedRoute){}
tanckerType:any
ngOnInit() {
  this.tanckerType = this.route.snapshot.paramMap.get('id');
  console.log("this.tanckerType_________",this.tanckerType)
}
}
