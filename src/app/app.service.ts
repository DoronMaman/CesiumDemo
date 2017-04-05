/**
 * Created by doron on 4/4/2017.
 */
import { Injectable }    from '@angular/core';


import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
import { Point } from './models/point';
/*import { dataservice } from './dataservice';*/

@Injectable()
export class appService {

  private selectedRow = new Subject<Point>();

  pointChanged = this.selectedRow.asObservable();

  changePoint(p : Point) {
    this.selectedRow.next(p);
  }
}
