import { Component, OnInit } from '@angular/core';
import { IResults, InformationsService } from '../../informations.service';
import { fadeInOutAnimation } from '../../app.component';

@Component({
  selector: 'app-trainings-and-certifications',
  templateUrl: './trainings-and-certifications.component.html',
  styleUrls: [],
  animations: [fadeInOutAnimation]
})
export class TrainingsAndCertificationsComponent implements OnInit {

  public Results : IResults;

  constructor(private informationService : InformationsService) { }

  ngOnInit() {
    this.informationService.getUserInformations().subscribe(x => this.Results = x);
  }

}
