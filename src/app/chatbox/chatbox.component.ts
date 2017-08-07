import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  ngOnInit() {
  }

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  instances: FirebaseListObservable<any[]>;
  msgVal: string = '';
  page: string;
  guid: Guid;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private route: ActivatedRoute, public router: Router) {
    this.page = this.route.snapshot.params['id'];
    this.guid = Guid.newGuid();
    this.items = af.list('messages/' + this.page,{
      query: {
        limitToLast: 5
      }
    });

    this.user = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.items.remove();
    this.afAuth.auth.signOut();
    this.router.navigate(['./home']);
  }

  Send(desc: string) {
    this.items.push('').update({
      [`id/`]: this.guid,
      [`message/`]: desc      
    });
    this.msgVal = '';
  }
}

export class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}