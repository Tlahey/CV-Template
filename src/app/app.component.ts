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
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

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

  constructor(private informationService : InformationsService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSetInNamespace('mdi', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/mdi.svg'))
    this.isLoading = true;
    this.informationService.getLoading().subscribe(loading => this.isLoading = loading);
    this.informationService.getUserInformations().subscribe(x => this.Results = x);
  }

  ngOnInit(): void {

  }

  ngOnDestroy() : void{

  }

}
