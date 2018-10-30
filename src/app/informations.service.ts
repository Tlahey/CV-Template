import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subject ,  AsyncSubject ,  forkJoin ,  BehaviorSubject } from 'rxjs';
import  { map ,  timeout } from 'rxjs/operators';
import { IEducations } from './interfaces/educations';
import { IWorkExperiences } from './interfaces/work-experiences';
import { IProjects } from './interfaces/projects';
import { ISkills } from './interfaces/skills';
import { IContacts } from './interfaces/contacts';
import { IInterestes } from './interfaces/interestes';
import { IInformations } from './interfaces/informations';
import { ITrainings } from './interfaces/trainings';
import { ICertifications } from './interfaces/certifications';
import { ICoverLatter } from './interfaces/cover-latter';

// https://hackernoon.com/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3 

export interface IResults{
  'Informations': IInformations,
  'WorkExperiences': IWorkExperiences,
  'Educations': IEducations, 
  'Interestes': IInterestes,
  'Projects': IProjects,
  'Skills': ISkills,
  'Contacts': IContacts,
  'Trainings': ITrainings,
  'Certifications': ICertifications,
  'CoverLatter': ICoverLatter
}

@Injectable()
export class InformationsService {

  constructor(private http: HttpClient) { 
    this.userInformations$ = new AsyncSubject<any>(); // AsyncSubject Attends le complete pour être affiché
    this.setUserInformations();
  }

  /* 
    Le subject permet de stoquer le résultat de la donnée
    2 possibilités : 
      - Récupérer les informations directement via la variable du service 
      - Récupérer les infomrations via un Subject (observer) qui mettra a jour automatiquement les valeurs
  */
  protected userInformations$ : AsyncSubject<IResults>;
  private _userInformations : IResults;
  public getUserInformations(): Observable<IResults> {
    return this.userInformations$;
  }

  protected loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public getLoading(): Observable<boolean> {
    return this.loading$;
  }

  //https://makina-corpus.com/blog/metier/2017/premiers-pas-avec-rxjs-dans-angular
  // Utilisation du forkJoin
  setUserInformations() : void{
    // Make the HTTP request:
    this.loading$.next(true);
    console.log("setUserInformations launched");
    forkJoin([
      this.http.get<IInformations>('./assets/json/informations.json'),
      this.http.get<IWorkExperiences>('./assets/json/workExperiences.json'),
      this.http.get<IEducations>('./assets/json/educations.json'),
      this.http.get<IInterestes>('./assets/json/interestes.json'),
      this.http.get<IProjects>('./assets/json/projects.json'),
      this.http.get<ISkills>('./assets/json/skills.json'),
      this.http.get<IContacts>('./assets/json/contacts.json'),
      this.http.get<ITrainings>('./assets/json/trainings.json'),
      this.http.get<ICertifications>('./assets/json/certifications.json'),
      this.http.get<ICoverLatter>('./assets/json/coverLatter.json')
    ])
    .pipe(map(
      // On format les données pour avoir 1 seul JSON
      (datas : Array<any>) => {
        const [ uInformations, uWorkExperiences, uEducation, uInterestes, uProjetcs, uSkills, uContact, uTrain, uCertif, uCoverLatter ] = datas;
        const fnContentMap = (e) => {
          if(Array.isArray(e.htmlDescription))
            e.htmlDescription = e.htmlDescription.join(" ");
          return e;
        }
        
        uEducation.content = (<IEducations>uEducation).content.map(fnContentMap);
        uWorkExperiences.content = (<IWorkExperiences>uWorkExperiences).content.map(fnContentMap);

        return {
          'Informations': uInformations,
          'WorkExperiences': uWorkExperiences,
          'Educations': uEducation,
          'Interestes': uInterestes,
          'Projects': uProjetcs,
          'Skills': uSkills,
          'Contacts': uContact,
          'Trainings': uTrain,
          'Certifications': uCertif,
          'CoverLatter': uCoverLatter
        } as IResults;
      }
    ))
    .subscribe(datas => {
      this._userInformations = datas;
      this.userInformations$.next(datas);
      this.userInformations$.complete();

      this.loading$.next(false);
    });
  }
}
