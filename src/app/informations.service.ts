import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import  { map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { timeout } from 'rxjs/operators/timeout';
import { setTimeout } from 'timers';

// https://hackernoon.com/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3 

@Injectable()
export class InformationsService {

  constructor(private http: HttpClient) { 
    this.loading = false;
    this.userInformations$ = new AsyncSubject<any>(); // AsyncSubject Attends le complete pour être affiché
    this.setUserInformations();
  }

  /* 
    Le subject permet de stoquer le résultat de la donnée
    2 possibilités : 
      - Récupérer les informations directement via la variable du service 
      - Récupérer les infomrations via un Subject (observer) qui mettra a jour automatiquement les valeurs
  */
  protected userInformations$ : AsyncSubject<any>;
  private _userInformations : any;
  public getUserInformations(): Observable<any> {
    return this.userInformations$;
}

  public loading : boolean; 

  //https://makina-corpus.com/blog/metier/2017/premiers-pas-avec-rxjs-dans-angular
  // Utilisation du forkJoin
  setUserInformations() : void{
    this.loading = true;
    // Make the HTTP request:
    console.log("setUserInformations launched");
    this.http.get<any>('./assets/json/informations.json').subscribe(data => {
      console.log(data);
      this._userInformations = data;
      this.userInformations$.next(data);
      this.userInformations$.complete();
      this.loading = false;
    });
  }
}
