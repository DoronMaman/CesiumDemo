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
  layer:any;
  showingLayer: boolean = false;
  currentPoint: Point;
  entityToPoint: Map<any, Point>;
  flag1 = true;
  flag2=false;
  flag3=false
  styleActiveName='active item';
  styleItemname='item';
  onClickHome() {

    this.flag1=true;
    this.flag2=false;
    this.flag3=false;
  }
  onClickAddMisiion() {

    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
  }
  onClickHelp() {

    this.flag1=false;
    this.flag2=false;
    this.flag3=true;
  }
  /*  onClick() {
      if(this.flag==true) {
        this.wasClicked='active item';
        this.wasntClick='item';
      }
      else{
        this.wasClicked='item';
        this.wasntClick='active item';
      }
    }*/
  dataPoint:dataservice;
  constructor(
    private _Sidenavservice: Sidenavservice,private _appService:appService
  ) {
    this.entityToPoint = new Map<any, Point>();
  }

  ngOnInit(): void {

    Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    window['CESIUM_BASE_URL'] = '/assets/Cesium';
    this.viewer = new Cesium.Viewer('cesiumViewer', {animation: false, baseLayerPicker: false, fullscreenButton: false, geocoder: false, timeline: false});

    const example = {
      "type": "Feature",
      "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
      }
    };


    this.viewer.dataSources.add(Cesium.GeoJsonDataSource.load(example, {
      stroke: Cesium.Color.HOTPINK,
      fill: Cesium.Color.PINK,
      strokeWidth: 3,
      markerSymbol: '$'
    }));

    this.viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(35.771959, 31.217018,800000)
    });

    this._appService.pointChanged.subscribe(point => {
      if (this.currentPoint === point) return;
      this.currentPoint = point;
      var pinBuilder = new Cesium.PinBuilder();

      this.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(point.lon, point.lat,800)
      });

      let entity = this.viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(point.lon, point.lat,0),


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
          width : 10, // default: undefined
          height : 10, // default: undefined
          properties: {
            doron: 'maman'
          }
        }

      });


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

  onClickToggleLayer() {
    if (!this.layer) {
      Cesium.GeoJsonDataSource.load('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json', {
        stroke: Cesium.Color.BLACK,
        fill: Cesium.Color.ALICEBLUE.withAlpha(0.5),
        strokeWidth: 50
      }).then(ds => {
        this.layer = ds;
        this.toggleLayer();
      });
    } else {
     this.toggleLayer();
    }
  }

  toggleLayer() {
    if (this.showingLayer) {
      this.viewer.dataSources.remove(this.layer);
    } else {
      this.viewer.dataSources.add(this.layer);
    }

    this.showingLayer = !this.showingLayer;
  }
}
