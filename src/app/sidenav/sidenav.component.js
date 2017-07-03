"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/switchMap');
var SidenavComponent = (function () {
    /* selectedHero: Hero;*/
    function SidenavComponent(_Sidenavservice, _appService) {
        this._Sidenavservice = _Sidenavservice;
        this._appService = _appService;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._Sidenavservice.getData().subscribe(function (data) { return _this.data = data; });
        this._appService.pointChanged.subscribe(function (point) {
            if (point === _this.currentPoint)
                return;
            _this.currentPoint = point;
        });
    };
    SidenavComponent.prototype.clicked = function (event, row) {
        console.log("doronnnnnnn");
        console.log(row.Id);
        this.currentPoint = {
            lon: row.lon,
            lat: row.lat
        };
        this._appService.changePoint(this.currentPoint);
    };
    SidenavComponent.prototype.getStyle = function (row) {
        if (this.currentPoint && row.lon === this.currentPoint.lon && row.lat === this.currentPoint.lat) {
            return "#34495e";
        }
        return "";
    };
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav',
            templateUrl: './sidenav.component.html',
            styleUrls: ['../../../semantic/out/semantic.css', './sidenav.component.css']
        })
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;
