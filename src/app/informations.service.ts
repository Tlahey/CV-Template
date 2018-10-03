import { Interestes } from './interfaces/interestes';
import { Informations } from './interfaces/informations';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subject ,  AsyncSubject ,  forkJoin ,  BehaviorSubject } from 'rxjs';
import  { map ,  timeout } from 'rxjs/operators';
import { Education } from './interfaces/education';
import { WorkExperiences } from './interfaces/work-experiences';
import { Projects } from './interfaces/projects';
import { Skills } from './interfaces/skills';
import { Contact } from './interfaces/contact';

// https://hackernoon.com/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3 

export interface IResults{
  'Informations': Informations,
  'WorkExperiences': WorkExperiences,
  'Education': Education, 
  'Interestes': Interestes,
  'Projects': Projects,
  'Skills': Skills,
  'Contact': Contact
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
      this.http.get<Informations>('./assets/json/informations.json'),
      this.http.get<WorkExperiences>('./assets/json/workExperience.json'),
      this.http.get<Education>('./assets/json/education.json'),
      this.http.get<Interestes>('./assets/json/interestes.json'),
      this.http.get<Projects>('./assets/json/projects.json'),
      this.http.get<Skills>('./assets/json/skills.json'),
      this.http.get<Contact>('./assets/json/contact.json')
    ])
    .pipe(map(
      // On format les données pour avoir 1 seul JSON
      (datas : Array<any>) => {
        const [ uInformations, uWorkExperiences, uEducation, uInterestes, uProjetcs, uSkills, uContact ] = datas;
        return {
          'Informations': uInformations,
          'WorkExperiences': uWorkExperiences,
          'Education': uEducation,
          'Interestes': uInterestes,
          'Projects': uProjetcs,
          'Skills': uSkills,
          'Contact': uContact
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
