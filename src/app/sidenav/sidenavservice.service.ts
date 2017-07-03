import { Injectable }    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { dataservice } from './dataservice';
import {User} from "../models/user";

@Injectable()
export class Sidenavservice {


  constructor(private http:Http){}
  getData(){
    return this.http.get('https://usercesium.firebaseio.com/users.json')
      .map((response:Response)=> Object.keys(response.json()).map((k) => response.json()[k]) as User[]);
  }
}

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
