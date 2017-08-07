import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-debate',
  templateUrl: './debate.component.html',
  styleUrls: ['../app.component.css']
})
export class DebateComponent implements OnInit {
  ageVerification:boolean = false;
  protrump: FirebaseListObservable<any[]>;
  antitrump: FirebaseListObservable<any[]>;
  links: FirebaseListObservable<any[]>;
  guid: Guid;
  routeLink: string;
  noExistingChat: boolean;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public router: Router) {
    this.protrump = af.list('protrump/');
    this.antitrump = af.list('antitrump/');
    this.links = af.list('links/');
    this.noExistingChat = true;
   }

  ngOnInit() { }

  showPage(check:boolean) {
    this.ageVerification = check;
  }

  sendUserToQueue(topic:string){
    this.guid = Guid.newGuid();

    if(topic === "antitrump"){
      this.protrump.subscribe(items => {
        items.forEach(item => {
          console.log("Item count =: " + item.id)
          if(item.count == "1"){
            this.routeLink = item.id;
            this.protrump.remove(item);
            console.log("Deleted")
            this.router.navigate(['./chatbox/' + this.routeLink]);
            this.noExistingChat = false;
            return true;
          }
        });
      });
      if(this.noExistingChat == true){
      console.log("still goes")
      //update new link
      this.antitrump.push('').update({
        [`id/`]: this.guid,
        [`count/`]: 1
      });
      this.router.navigate(['./chatbox/' + String(this.guid)]);
      }          
    } 
    else{
      this.antitrump.subscribe(items => {
        items.forEach(item => {
          if(item.count == "1"){
            this.routeLink = item.id;
            console.log("A 1")
            this.antitrump.remove(item);
            console.log("Deleted")
            this.router.navigate(['./chatbox/' + this.routeLink]);
            this.noExistingChat = false;
            return true;
          }
        });
      });
      if(this.noExistingChat == true){
      console.log("still goes here")
      this.protrump.push('').update({
        [`id/`]: this.guid,
        [`count/`]: 1
      });
      this.router.navigate(['./chatbox/' + String(this.guid)]);          
      }
    }
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
