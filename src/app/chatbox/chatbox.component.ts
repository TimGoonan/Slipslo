import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  ngOnInit() {}

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 5
      }
    });
    this.user = this.afAuth.authState;
  }

  login() {
    this.items != null;
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.items = null;
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
  }
}
