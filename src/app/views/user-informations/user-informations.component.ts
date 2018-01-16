import { IResults } from './../../informations.service';
import { Component, OnInit } from '@angular/core';
import { InformationsService } from '../../informations.service';
import { fadeInOutAnimation } from '../../app.component';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.scss'],
  animations: [fadeInOutAnimation]
})
export class UserInformationsComponent implements OnInit {

  public Results : IResults;

  constructor(private informationService : InformationsService) { 
    this.informationService.getUserInformations().subscribe(x => this.Results = x);
  }

  ngOnInit() {
  }

}
