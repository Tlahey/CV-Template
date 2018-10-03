import { Component, OnInit, Input } from '@angular/core';
import { IWorkExperiences } from '../../interfaces/work-experiences';
import { IEducations } from '../../interfaces/educations';
import { IInterestes } from '../../interfaces/interestes';
import { ICertifications } from '../../interfaces/certifications';
import { ITrainings } from '../../interfaces/trainings';

@Component({
  selector: 'app-section-wrapper-text',
  templateUrl: './section-wrapper-text.component.html',
  styleUrls: ['./section-wrapper-text.component.scss']
})
export class SectionWrapperTextComponent implements OnInit {

  @Input('Informations') Informations : (IWorkExperiences | IEducations | IInterestes | ICertifications | ITrainings) = undefined;
  constructor() { }

  ngOnInit() {
  }

}
