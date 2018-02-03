import { InformationsService } from './../../informations.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public Contact : Contact;
  constructor(private informationService : InformationsService) { 
    this.informationService.getUserInformations().subscribe(x => this.Contact = x.Contact);
  }

  ngOnInit() {
  }

}
