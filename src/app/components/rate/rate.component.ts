import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

  private _note : number;

  @Input('note') note : number;
  @Input('max') max?: number;
  
  Arr = Array;

  constructor() { 
    this.max = 5;
  }

  ngOnInit() {
  }

  public getClass(index){
    let ngClass = {
      'skill-rate-on': (index <= (this.note -1)),
      'skill-rate-off': (index >(this.note -1))
    };
    return ngClass;
  }
}
