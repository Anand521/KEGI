import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { WorkVisitComponent } from './work-visit/work-visit.component';
import { WorkVisitConfirmedComponent } from './work-visit-confirmed/work-visit-confirmed.component';
import { WorkVisitConfirmedDetailsComponent } from './work-visit-confirmed-details/work-visit-confirmed-details.component';
import { WorkVisitConfirmedDetailsExpandedComponent } from './work-visit-confirmed-details-expanded/work-visit-confirmed-details-expanded.component';
import { WorkVisitDetailsComponent } from './work-visit-details/work-visit-details.component';
import { WorkVisitDetailsDireectComponent } from './work-visit-details-direect/work-visit-details-direect.component';
import { WorkVisitQuotedComponent } from './work-visit-quoted/work-visit-quoted.component';
import { WorkVisitQuotedDetailsComponent } from './work-visit-quoted-details/work-visit-quoted-details.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    HomeComponent,
    MyProfileComponent,
    WorkVisitComponent,
    WorkVisitConfirmedComponent,
    WorkVisitConfirmedDetailsComponent,
    WorkVisitConfirmedDetailsExpandedComponent,
    WorkVisitDetailsComponent,
    WorkVisitDetailsDireectComponent,
    WorkVisitQuotedComponent,
    WorkVisitQuotedDetailsComponent,
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path:'work-visit',
        component:WorkVisitComponent,
        children :[
          {
          path :'work-visit-quoted',
          component: WorkVisitQuotedComponent ,
          },
          {
          path: 'home',
          component: HomeComponent,
          },
          {
          path: 'work-visit-confirmed',
          component: WorkVisitConfirmedComponent,
          },
          {
          path: 'work-visit-details',
          component: WorkVisitDetailsComponent,
          },
          {
          path: 'work-visit-confirmed-details',
          component: WorkVisitConfirmedDetailsComponent,
          },
          {
          path: 'my-profile',
          component: MyProfileComponent,
          },
          {
          path: 'work-visit-details-direect',
          component: WorkVisitDetailsDireectComponent,
          },
        ]
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
      },
     /**  {
        path: 'work-visit-confirmed',
        component: WorkVisitConfirmedComponent,
      },*/
      {
        path: 'work-visit-confirmed-details',
        component: WorkVisitConfirmedDetailsComponent,
      },
      {
        path: 'work-visit-confirmed-details-expanded',
        component: WorkVisitConfirmedDetailsExpandedComponent,
      },
      {
        path: 'work-visit-details',
        component: WorkVisitDetailsComponent,
      },
      {
        path: 'work-visit-details-direect',
        component: WorkVisitDetailsDireectComponent,
      },
     /**  {
        path: 'work-visit-quoted',
        component: WorkVisitQuotedComponent,
      },*/
      {
        path: 'work-visit-quoted-details',
        component: WorkVisitQuotedDetailsComponent,
      },
    ]),
  ],

})
export class EngineerModule {}
