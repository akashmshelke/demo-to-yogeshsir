import { Component } from '@angular/core';
import { EventEmitter } from 'protractor';
import {EmtrserviceService} from './emtrservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogin:boolean=false;
  custId:number;

  title = 'Test';

  constructor(private router:Router,private emservice:EmtrserviceService){

    
    this.navBarSwitch();
   
  }

  navBarSwitch(){
    this.custId=localStorage['ID'];
    if(this.custId==undefined)
    {
      this.isLogin=false;
    }else{
      this.isLogin=true;
    }

  }


  ngOnInit(){
    this.emservice.getEmittedValueForNavSwitch()
      .subscribe(item => this.isLogin=item);

      
  }
}
