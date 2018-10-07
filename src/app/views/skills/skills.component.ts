import { ISkillsContent, ISkills } from './../../interfaces/skills';
import { Component, OnInit } from '@angular/core';
import { InformationsService } from '../../informations.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skill : ISkills;
  public value : string = "";
  public step : number = -1;

  constructor(private informationService : InformationsService) { 
    this.informationService.getUserInformations().subscribe(x => this.skill = x.Skills);
  }

  ngOnInit() {
  }
 

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


import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'skillFilter'})
export class SkillFilterPipe implements PipeTransform {
  transform(skills: Array<ISkillsContent>, text: string): Array<any> {
    let tabSkills = [];
    skills.forEach(skill => {
      skill.pannelContent.forEach(contentPannel => {
        if(contentPannel.skillName.toLowerCase().includes(text.toLocaleLowerCase()))
          tabSkills.push(contentPannel);
      })
    });
    return tabSkills;
  }
}