import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

class Submit {
    vote: number;
    $key: string;
}

@Component({
  selector: 'app-shorttermvote',
  templateUrl: './shorttermvote.component.html',
  styleUrls: ['./shorttermvote.component.css']
})
export class ShorttermvoteComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  nothingChecked: boolean;
  result:Submit;

  constructor(public af: AngularFireDatabase) {
    this.items = af.list('/shortterm');
    this.nothingChecked = false;
  }

  ngOnInit() {
  }

  incrementVoteValue(result:Submit){
    if(result == null){
      console.log("Error");
      this.nothingChecked = true;
    }
    else{
      result.vote = result.vote + 1;
      this.items.update(result.$key, result);
      this.nothingChecked = false;
    }
  }
}
