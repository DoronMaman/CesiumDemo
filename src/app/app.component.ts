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
  currentPoint: Point;
  entityToPoint: Map<any, Point>;

  dataPoint:dataservice;
  constructor(
    private _Sidenavservice: Sidenavservice,private _appService:appService
  ) {
    this.entityToPoint = new Map<any, Point>();
  }


  ngOnInit(): void {

    Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    window['CESIUM_BASE_URL'] = '/assets/Cesium';
    this.viewer = new Cesium.Viewer('cesiumViewer');

    this.viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(35.771959, 31.217018,800000)
    });

    this._appService.pointChanged.subscribe(point => {
      this.currentPoint = point;
      var pinBuilder = new Cesium.PinBuilder();

      let pointDegrees = Cesium.Cartesian3.fromDegrees(point.lon, point.lat);

      let entity = this.viewer.entities.add({
        position : pointDegrees,

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

      // this.viewer.camera.flyTo({
      //   destination : pointDegrees
      // });

      this.entityToPoint.set(entity, point);
    });

    let handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    handler.setInputAction((click) => {
      var pickedObject = this.viewer.scene.pick(click.position);
      if (Cesium.defined(pickedObject) && this.entityToPoint.has(pickedObject.id)) {
        this.currentPoint = this.entityToPoint.get(pickedObject.id);
        this._appService.changePoint(this.currentPoint);
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

  }

}
