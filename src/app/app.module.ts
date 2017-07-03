import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {Sidenavservice} from './sidenav/sidenavservice.service';
import{appService} from './app.service';
import { AddUserComponent } from './add-user/add-user.component';
import {routing} from "./sidenav.router";
import {FireBaseService} from "./add-user/firebase.service";
import { RouterComponent } from './router/router.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AddUserComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RouterComponent
  ],
  providers: [Sidenavservice,appService,FireBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
