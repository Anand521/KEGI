import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteVisitAllComponent } from './site-visit-all/site-visit-all.component';
import { SiteVisitAssignedComponent } from './site-visit-assigned/site-visit-assigned.component';
import { SiteVisitAssignedDetailsComponent } from './site-visit-assigned-details/site-visit-assigned-details.component';
import { SiteVisitCompletedComponent } from './site-visit-completed/site-visit-completed.component';
import { SiteVisitConfirmedComponent } from './site-visit-confirmed/site-visit-confirmed.component';
import { SiteVisitCompletedDetailsComponent } from './site-visit-completed-details/site-visit-completed-details.component';
import { SiteVisitConfirmedDetailsComponent } from './site-visit-confirmed-details/site-visit-confirmed-details.component';
import { SiteVisitRescheduleComponent } from './site-visit-reschedule/site-visit-reschedule.component';
import { SiteVisitRescheduleDetailsComponent } from './site-visit-reschedule-details/site-visit-reschedule-details.component';
import { SiteVisitRescheduleDetailsSupervisorComponent } from './site-visit-reschedule-details-supervisor/site-visit-reschedule-details-supervisor.component';
import { SiteVisitDetailsComponent } from './site-visit-details/site-visit-details.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SiteVisitComponent } from './new-request/site-visit.component';
import { CreateSiteVisitComponent } from './create-site-visit/create-site-visit.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SiteVisitComponent,
    SiteVisitAllComponent,
  SiteVisitAssignedComponent,
SiteVisitAssignedDetailsComponent,
SiteVisitCompletedComponent,
SiteVisitConfirmedComponent,
SiteVisitCompletedDetailsComponent,
SiteVisitConfirmedDetailsComponent,
SiteVisitDetailsComponent,
SiteVisitRescheduleComponent,
SiteVisitRescheduleDetailsComponent,
SiteVisitRescheduleDetailsSupervisorComponent,
CreateSiteVisitComponent],
  imports: [
    CommonModule,RouterModule.forChild([
      {
        path: '',
        component: SiteVisitComponent,
        children :[{
          path :'', redirectTo :'new-request',pathMatch:'full'
        },
        {
          path:'new-request',
          component:SiteVisitComponent
        },]
      },
      {
        path: 'site-visit-all',
        component: SiteVisitAllComponent,
      },
      {
        path: 'site-visit-assigned',
        component: SiteVisitAssignedComponent,
      },
      {
        path: 'site-visit-assigned-details',
        component: SiteVisitAssignedDetailsComponent,
      },
      {
        path: 'site-visit-completed',
        component: SiteVisitCompletedComponent,
      },
      {
        path: 'site-visit-completed-details',
        component: SiteVisitCompletedDetailsComponent,
      },
      {
        path: 'site-visit-confirmed',
        component: SiteVisitConfirmedComponent,
      },
      {
        path: 'site-visit-confirmed-details',
        component: SiteVisitConfirmedDetailsComponent,
      },
      {
        path: 'site-visit-details',
        component: SiteVisitDetailsComponent,
      },
      {
        path: 'site-visit-reschedule',
        component: SiteVisitRescheduleComponent,
      },
      {
        path: 'site-visit-reschedule-details',
        component: SiteVisitRescheduleComponent,
      },
      {
        path: 'site-visit-reschedule-details',
        component: SiteVisitRescheduleComponent,
      },
      {
        path: 'site-visit-reschedule-details-supervisor',
        component: SiteVisitRescheduleDetailsSupervisorComponent,
      },
      {
        path: 'create-site-visit',
        component:CreateSiteVisitComponent,
      },
    ])
  ]
})
export class SiteVisitModule { }
