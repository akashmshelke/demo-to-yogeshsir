import { Component, OnInit } from '@angular/core';
import { EmtrserviceService } from '../emtrservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private emtService:EmtrserviceService,private router:Router) { }

  onLogin(){

    alert("In login");

    localStorage['ID']=1;

    this.emtService.navBarSwitch(true);
    this.router.navigate(['home']);

  }

  ngOnInit() {
  }

}
