import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../app.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/inquiries');
    this.fieldsRequired = false;
  }

  fieldsRequired: boolean;
  name: string;
  email: string;
  message: string;
  items: FirebaseListObservable<any[]>;

  ngOnInit() {
  }

  sendInquiryData(name : string, email : string, message : string){
    if(name == null || email == null || message == null){
      this.fieldsRequired = true;
    }
    else
    {    
      this.fieldsRequired = false;
      this.items.push({name: name, email: email, message: message});
      this.name = null;
      this.email = null;
      this.message = null;
    }
  }
}
