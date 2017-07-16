import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debate',
  templateUrl: './debate.component.html',
  styleUrls: ['../app.component.css']
})
export class DebateComponent implements OnInit {

  ageVerification:boolean;

  constructor() { }

  ngOnInit() {
    this.ageVerification = false;
  }

  public showPage(check:boolean) {
    this.ageVerification = check;
  }

}
