import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  bs = new BehaviorSubject<any>(null);

  constructor() {
  }


  setData(value): void {
    this.bs.next(value);
  }

  getData(): any {
    return this.bs.getValue();
  }
}
