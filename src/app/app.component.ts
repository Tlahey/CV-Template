import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}
  
  public results : any = {};

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('/assets/json/informations.json').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
    });
  }

  public random(){
    let rand = Math.floor(Math.random() * 100) + 1;
    return rand;
  }
}
