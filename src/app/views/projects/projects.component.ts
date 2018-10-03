import { Component, OnInit } from '@angular/core';
import { InformationsService } from '../../informations.service';
import { IProjects } from '../../interfaces/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public Projects : IProjects;

  constructor(private informationService : InformationsService) { 
    this.informationService.getUserInformations().subscribe(x => this.Projects = x.Projects);
  }
  
  ngOnInit() {
  }

  public navigateNewTab(url){
    window.open(url, "_blank");
  }
}
