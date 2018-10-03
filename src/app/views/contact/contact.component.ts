import { InformationsService } from './../../informations.service';
import { Component, OnInit } from '@angular/core';
import { IContacts } from '../../interfaces/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public Contact : IContacts;
  constructor(private informationService : InformationsService) { 
    this.informationService.getUserInformations().subscribe(x => this.Contact = x.Contacts);
  }

  ngOnInit() {
  }

}
