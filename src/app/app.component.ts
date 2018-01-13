import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { InformationsService } from './informations.service';
import { Subject } from 'rxjs/Subject';

export const fadeInOutAnimation =
  trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 }))
    ])
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private informationService : InformationsService) {
    // this.informationService.UserInformations.subscribe(data => this.results = data);
  }

  ngOnInit(): void {
    const subject = new Subject<number>();

      subject.subscribe((number) => {
        console.log(1, number);
    });
    
    
    subject.subscribe((number) => {
        console.log(2, number);
    });


    subject.next(1);  // On envoie une donnée
    subject.next(2);  // On envoie une autre donnée
    subject.forEach(x => {
      console.log("--- " + x);
    });
    subject.complete();  // On indique que l'observable n'enverra plus de données
  }

  public random(){
    let rand = Math.floor(Math.random() * 100) + 1;
    return rand;
  }
}
