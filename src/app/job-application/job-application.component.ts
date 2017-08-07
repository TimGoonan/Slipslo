import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
//import {Http, Response, Headers,RequestOptions} from '@angular/http';
//import {Observable} from 'rxjs/observable';
//import 'rxjs/Rx';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['../app.component.css']
})
export class JobApplicationComponent implements OnInit {

  page: string;
  fieldsRequired: boolean;
  name: string;
  email: string;

  apiEndPoint: string;

  constructor(private route: ActivatedRoute) {
    this.fieldsRequired = false;
   }

  ngOnInit() {
    this.page = this.route.snapshot.params['id'];
  }

  sendCareerData(name,email){

  }

/*
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`${this.apiEndPoint}`, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
  }
*/
}
