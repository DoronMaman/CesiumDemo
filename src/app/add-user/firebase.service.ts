/**
 * Created by doron on 5/15/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Country} from "../models/country";
import {Adress} from "../models/Adress";
@Injectable()
export class FireBaseService {

  constructor(private _http: Http) {
  }

  getCountry() {
    return this._http.get('https://restcountries.eu/rest/v2/all?fields=name;latlng').map(response => response.json() as Country[]);
  }
  getCity(Adress){
    return this._http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${Adress}&key=AIzaSyDYXWCNRZU3w0EYKMf-i88Exjyw8Q_yYXE&language=en`).map(response =>response.json() as Adress[]);

  }
}
