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

@NgModule({
  declarations: [
    AppComponent,
    DebateComponent,
    CareersComponent,
    VoteComponent,
    SubmitComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
