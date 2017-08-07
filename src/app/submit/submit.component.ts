import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['../app.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/submissions');
    this.fieldsRequired = false;
  }

  ngOnInit() {
  }

  fieldsRequired: boolean;
  topic: string;
  option1: string;
  option2: string;
  items: FirebaseListObservable<any[]>;

  sendSubmissionData(topic : string, option1 : string, option2 : string){
    if(topic == null || option1 == null || option2 == null){
      this.fieldsRequired = true;
    }
    else
    {
      this.fieldsRequired = false;
      this.items.push({topic: topic, option1: option1, option2: option2, voteCount: 0});
      this.topic = null;
      this.option1 = null;
      this.option2 = null;
    }
  }
}
