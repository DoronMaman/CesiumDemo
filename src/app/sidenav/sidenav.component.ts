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
  styleUrls: ['../../../semantic/out/semantic.css', './sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  heroes: dataservice[];
  data:dataservice;

  currentPoint: Point;
 /* selectedHero: Hero;*/
  constructor(
    private _Sidenavservice: Sidenavservice,private _appService:appService
   ) { }



_
  ngOnInit(): void {
  this._Sidenavservice.getData().subscribe((data:any)=> this.data=data);
  this._appService.pointChanged.subscribe(point => {
    if (point === this.currentPoint) return;

    this.currentPoint = point;
  });
  }
  clicked(event, row){
    console.log("doronnnnnnn");
    console.log(row.Id);

    this.currentPoint = {
      lon: row.latlng[1],
      lat: row.latlng[0]
    };

    this._appService.changePoint(this.currentPoint);
  }

  // getStyle(row) {
  //   if (this.currentPoint && row.lon === this.currentPoint.lon && row.lat === this.currentPoint.lat) {
  //     return "#34495e";
  //   }
  //
  //   return "";
  // }

}
