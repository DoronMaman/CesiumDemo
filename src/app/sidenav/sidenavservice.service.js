"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
require('rxjs/Rx');
var Sidenavservice = (function () {
    function Sidenavservice(http) {
        this.http = http;
    }
    Sidenavservice.prototype.getData = function () {
        return this.http.get('/assets/list.json')
            .map(function (response) { return response.json(); });
    };
    Sidenavservice = __decorate([
        core_1.Injectable()
    ], Sidenavservice);
    return Sidenavservice;
}());
exports.Sidenavservice = Sidenavservice;
/* private headers = new Headers({'Content-Type': 'application/json'});
 private heroesUrl = '/assets/list.json';  // URL to web api

 constructor(private http: Http) { }

 getHeroes(): Promise<dataservice[]> {
   return this.http.get(this.heroesUrl)
     .toPromise()
     .then(response => response.json().data as dataservice[])
     .catch(this.handleError);
 }


 getHero(id: number): Promise<dataservice> {
   const url = `${this.heroesUrl}/${id}`;
   return this.http.get(url)
     .toPromise()
     .then(response => response.json().data as dataservice)
     .catch(this.handleError);
 }

 delete(id: number): Promise<void> {
   const url = `${this.heroesUrl}/${id}`;
   return this.http.delete(url, {headers: this.headers})
     .toPromise()
     .then(() => null)
     .catch(this.handleError);
 }

 create(name: string): Promise<dataservice> {
   return this.http
     .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
     .toPromise()
     .then(res => res.json().data)
     .catch(this.handleError);
 }

 update(hero: dataservice): Promise<dataservice> {
   const url = `${this.heroesUrl}/${hero.id}`;
   return this.http
     .put(url, JSON.stringify(hero), {headers: this.headers})
     .toPromise()
     .then(() => hero)
     .catch(this.handleError);
 }

 private handleError(error: any): Promise<any> {
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
 }
}
*/
