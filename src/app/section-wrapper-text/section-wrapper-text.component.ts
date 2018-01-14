import { Interestes } from './../interfaces/interestes';
import { WorkExperiences } from './../interfaces/work-experiences';
import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../interfaces/education';

@Component({
  selector: 'app-section-wrapper-text',
  templateUrl: './section-wrapper-text.component.html',
  styleUrls: ['./section-wrapper-text.component.scss']
})
export class SectionWrapperTextComponent implements OnInit {

  @Input('Informations') Informations : (WorkExperiences | Education | Interestes) = undefined;
  constructor() { }

  ngOnInit() {
  }

}
