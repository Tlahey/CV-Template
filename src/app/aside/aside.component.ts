import { Informations } from './../interfaces/informations';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { InformationsService } from '../informations.service';
import { fadeInOutAnimation } from '../app.component';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AsideComponent {

  @Input() Informations : Informations = undefined;
  constructor() { 

  }

}
