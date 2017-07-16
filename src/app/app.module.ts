import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

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
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
