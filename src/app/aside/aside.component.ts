import { Component, OnInit, Input } from '@angular/core';
import { InformationsService } from '../informations.service';
import { fadeInOutAnimation } from '../app.component';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AsideComponent implements OnInit {

  public Results : any = undefined;
  constructor(public informationService : InformationsService) { 
    this.informationService.getUserInformations().subscribe(x => this.Results = x);
  }

  ngOnInit() {
  }

}
