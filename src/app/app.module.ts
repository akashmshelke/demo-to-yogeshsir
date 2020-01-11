import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path:"",component:LoginComponent},
        {path:"signup",component:SignupComponent},
        {path:"home",component:HomeComponent},

      ]
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
