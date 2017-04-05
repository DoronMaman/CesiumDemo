import { Component, OnInit } from '@angular/core';
import {Sidenavservice} from './sidenavservice.service';
import {dataservice} from "./dataservice";
import {ActivatedRoute,Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Response} from "@angular/http";
import {appService} from "../app.service";
import {_appIdRandomProviderFactory} from "@angular/core/src/application_tokens";
import {Point} from "../models/point";
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../../../semantic/out/semantic.css']
})
export class SidenavComponent implements OnInit {
  heroes: dataservice[];
  data:dataservice;
 /* selectedHero: Hero;*/
  constructor(
    private _Sidenavservice: Sidenavservice,private _appService:appService
   ) { }



_
  ngOnInit(): void {
  this._Sidenavservice.getData().subscribe((data:any)=> this.data=data);

  }
  clicked(event, row){
    console.log("doronnnnnnn");
    console.log(row.Id);

    let p: Point = {
      lon: row.lon,
      lat: row.lat
    };

    this._appService.changePoint(p);
  }

}
