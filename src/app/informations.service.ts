import { Interestes } from './interfaces/interestes';
import { Informations } from './interfaces/informations';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import  { map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { timeout } from 'rxjs/operators/timeout';
import { forkJoin } from "rxjs/observable/forkJoin";
import { Education } from './interfaces/education';
import { WorkExperiences } from './interfaces/work-experiences';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// https://hackernoon.com/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3 

export interface IResults{
  'Informations': Informations,
  'WorkExperiences': WorkExperiences,
  'Education': Education, 
  'Interestes': Interestes
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
      this.http.get<Interestes>('./assets/json/interestes.json')
    ])
    .pipe(map(
      // On format les données pour avoir 1 seul JSON
      (datas : Array<any>) => {
        const [ uInformations, uWorkExperiences, uEducation, uInterestes ] = datas;
        return {
          'Informations': uInformations,
          'WorkExperiences': uWorkExperiences,
          'Education': uEducation,
          'Interestes': uInterestes
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
