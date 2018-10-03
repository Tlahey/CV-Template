import { ISkills } from './../../interfaces/skills';
import { Component, OnInit } from '@angular/core';
import { InformationsService } from '../../informations.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skill : ISkills;

  constructor(private informationService : InformationsService) { 
    this.informationService.getUserInformations().subscribe(x => this.skill = x.Skills);
  }

  ngOnInit() {
  }
 
  step : number = -1;
  setStep(index: number) {
    if(this. step == index)
      this.step = -1;
    else
      this.step = index;
  }

  setIcon(index){
    if(index == this.step)
      return true;
    return false;
  }
}
