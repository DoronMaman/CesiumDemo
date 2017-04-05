import { Component, OnInit } from '@angular/core';
import 'cesium/Build/Cesium/Cesium.js';
import {Sidenavservice} from "./sidenav/sidenavservice.service";
import {dataservice} from "./sidenav/dataservice";
import {appService} from "./app.service";
import {Point} from './models/point';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo Cesium ';
  viewer: any;
  dataPoint:dataservice;
  constructor(
    private _Sidenavservice: Sidenavservice,private _appService:appService
  ) { }


  ngOnInit(): void {

    Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    window['CESIUM_BASE_URL'] = '/assets/Cesium';
    this.viewer = new Cesium.Viewer('cesiumViewer');

    this.viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(35.771959, 31.217018,800000)
    });

    this._appService.pointChanged.subscribe(point => {
      var pinBuilder = new Cesium.PinBuilder();

      this.viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(point.lon, point.lat),

        billboard : {
          image : pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(), // default: undefined
          show : true, // default
          pixelOffset : new Cesium.Cartesian2(0, -50), // default: (0, 0)
          eyeOffset : new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
          horizontalOrigin : Cesium.HorizontalOrigin.CENTER, // default
          verticalOrigin : Cesium.VerticalOrigin.BOTTOM, // default: CENTER
          scale : 2.0, // default: 1.0
          color : Cesium.Color.LIME, // default: WHITE
          rotation : Cesium.Math.PI_OVER_FOUR, // default: 0.0
          alignedAxis : Cesium.Cartesian3.ZERO, // default
          width : 25, // default: undefined
          height : 25 // default: undefined
        }

      });
    });

    /*Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    window['CESIUM_BASE_URL'] = '/assets/Cesium';*/
/*    this._Sidenavservice.getData().subscribe((dataPoint:any)=> this.dataPoint=dataPoint);*/




 /*   this.viewer = new Cesium.Viewer('cesiumViewer');
    var pinBuilder = new Cesium.PinBuilder();
    this.viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(35.771959, 31.217018,800000)
    });*/


    /*this._appService.onDraw();*/




/*    this.viewer.entities.add({
      position : Cesium.Cartesian3.fromDegrees(35.771959, 31.217018),
      billboard : {
        image : pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(), // default: undefined
        show : true, // default
        pixelOffset : new Cesium.Cartesian2(0, -50), // default: (0, 0)
        eyeOffset : new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
        horizontalOrigin : Cesium.HorizontalOrigin.CENTER, // default
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM, // default: CENTER
        scale : 2.0, // default: 1.0
        color : Cesium.Color.LIME, // default: WHITE
        rotation : Cesium.Math.PI_OVER_FOUR, // default: 0.0
        alignedAxis : Cesium.Cartesian3.ZERO, // default
        width : 25, // default: undefined
        height : 25 // default: undefined
      }

    });*/

/*    this.viewer.scene.canvas.setAttribute('tabIndex', 1);

    this.viewer.screenSpaceEventHandler.setInputAction(function() {
      this.viewer.scene.canvas.focus();
    }, Cesium.ScreenSpaceEventType.LEFT_DOWN);*/




  }

}
