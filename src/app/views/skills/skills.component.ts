import { ISkillsContent, ISkills } from './../../interfaces/skills';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InformationsService } from '../../informations.service';
import { debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skill : ISkills;
  public value : string = "";
  public step : number = -1;

  @ViewChild('input') input;
  constructor(
    private informationService : InformationsService,
    private ngxAnalytics: NgxAnalytics
  ) { 
    this.informationService.getUserInformations().subscribe(x => this.skill = x.Skills);
  }

  ngOnInit() {

  }
 
  ngAfterViewInit(){
    this.input.valueChanges
      .debounceTime(2000) 
      .distinctUntilChanged() 
      .subscribe(text => {
        this.ngxAnalytics.eventTrack.next({
          action: 'Search', 
          properties: { 
            category: 'Skill',
            label: text
          },
        });
      });
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
import { NgxAnalytics } from 'ngx-analytics';
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