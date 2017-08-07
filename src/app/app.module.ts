import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { DebateComponent } from './debate/debate.component';
import { CareersComponent } from './careers/careers.component';
import { VoteComponent } from './vote/vote.component';
import { SubmitComponent } from './submit/submit.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ShorttermvoteComponent } from './shorttermvote/shorttermvote.component';
import { LongtermvoteComponent } from './longtermvote/longtermvote.component';
import { MottoComponent } from './motto/motto.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { StudentsComponent } from './students/students.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { JobApplicationComponent } from './job-application/job-application.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCCIue-e0dBbUb47n-oX-0BJFNEpKIv2Ig",
    authDomain: "slipslo-c6e9c.firebaseapp.com",
    databaseURL: "https://slipslo-c6e9c.firebaseio.com",
    projectId: "slipslo-c6e9c",
    storageBucket: "slipslo-c6e9c.appspot.com",
    messagingSenderId: "752592169613"
};

@NgModule({
  declarations: [
    AppComponent,
    DebateComponent,
    CareersComponent,
    VoteComponent,
    SubmitComponent,
    HomeComponent,
    FooterComponent,
    ShorttermvoteComponent,
    LongtermvoteComponent,
    MottoComponent,
    ProfessionalsComponent,
    StudentsComponent,
    ChatboxComponent,
    JobApplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
