import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Http} from "@angular/http";
import {FireBaseService} from "./firebase.service";
import {Country} from "../models/country";
import {Adress} from "../models/Adress";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css','../../../semantic/out/semantic.css']
})
export class AddUserComponent implements OnInit {
  private countries: Country[];
  private adress: any;
  user={
    id:'',
    FirstName:'Doron',
    LastName:'Maman',
    Address:'Yehud',
   country:'Brazil',
    cardNumber:'123454',
    cardCode:'45677',
    month:'December',
    Year:'2017'
  };

  month=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  constructor(private _http:Http, private _service: FireBaseService) { }


  ngOnInit() {
    this._service.getCountry().subscribe(countries => this.countries = countries);
    this._service.getCity(this.user.Address).subscribe(adress => this.adress = adress);
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    return this._service.getCity(this.user.Address).subscribe(adress => {
      this.adress = adress;

    this.user['latlng'] = [this.adress.results[0].geometry.location.lat, this.adress.results[0].geometry.location.lng];
/*    this.user['latlng'] = this.countries.find(country => country.name === this.user.country).latlng;*/
    let userWithId = {};
    userWithId[this.user.id] = this.user;
    var json = JSON.stringify(userWithId);
    console.log(json);
    return this._http.patch('https://usercesium.firebaseio.com/users.json',json).subscribe(response => console.log(response));
    });
  }
  /*postJson() {
    var json = JSON.stringify(this.user);
    return this._http.post('https://usercesium.firebaseio.com/',json);
  }*/

}
