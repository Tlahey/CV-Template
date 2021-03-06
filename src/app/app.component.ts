import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { InformationsService } from './informations.service';
import { Subject } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { NgxAnalyticsGoogleAnalytics } from 'ngx-analytics/ga';

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

  public isLoading : boolean;
  public Results : any;

  constructor(
    private informationService : InformationsService, 
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    ngxAnalyticsGoogleAnalytics: NgxAnalyticsGoogleAnalytics
  ) {
    iconRegistry.addSvgIconSetInNamespace('mdi', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/mdi.svg'))
    iconRegistry.addSvgIconSetInNamespace('custom', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/custom.svg'))
    this.isLoading = true;
    this.informationService.getLoading().subscribe(loading => this.isLoading = loading);
    this.informationService.getUserInformations().subscribe(x => this.Results = x);
  }

  ngOnInit(): void {

  }

  ngOnDestroy() : void{

  }

}
