import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { InformationsService } from './informations.service';
import { Subject } from 'rxjs/Subject';

export const fadeInOutAnimation =
  trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 }))
    ])
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoading : boolean = true;
  public Results : any;

  constructor(private informationService : InformationsService) {
    this.informationService.getLoading().subscribe(loading => this.isLoading = loading);
    this.informationService.getUserInformations().subscribe(x => this.Results = x);
  }

  ngOnInit(): void {

  }

  ngOnDestroy() : void{

  }

}
