import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DebateComponent } from './debate/debate.component';
import { CareersComponent } from './careers/careers.component';
import { VoteComponent } from './vote/vote.component';
import { SubmitComponent } from './submit/submit.component';

export const router: Routes = [
    {path:"", redirectTo: "home", pathMatch: "full"},
    {path:"home", component: HomeComponent},
    {path:"debate", component: DebateComponent},
    {path:"careers", component: CareersComponent},
    {path:"vote", component: VoteComponent},
    {path:"submit", component: SubmitComponent},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);