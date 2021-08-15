import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkVisitAllComponent } from './work-visit-all/work-visit-all.component';
import { WorkVisitAssignedComponent } from './work-visit-assigned/work-visit-assigned.component';
import { WorkVisitCompletedComponent } from './work-visit-completed/work-visit-completed.component';

import { WorkVisitAssignedDetailsComponent } from './work-visit-assigned-details/work-visit-assigned-details.component';
import { WorkVisitDetailsEngineerComponent } from './work-visit-details-engineer/work-visit-details-engineer.component';
import { WorkVisitRescheduleComponent } from './work-visit-reschedule/work-visit-reschedule.component';
import { RouterModule } from '@angular/router';
import { WorkVisitDetailsComponent } from './work-visit-details/work-visit-details.component';

import { WorkVisitConfirmedComponent } from './work-visit-confirmed/work-visit-confirmed.component';
import { WorkVisitComponent } from './new-request/work-visit.component';
import { WorkVisitConfirmedDetailsComponent } from './work-visit-confirmed-details/work-visit-confirmed-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateSiteVisitComponent } from '../site-visit/create-site-visit/create-site-visit.component';
import { CreateWorkVisitComponent } from './create-work-visit/create-work-visit.component';

;


@NgModule({
  declarations: [WorkVisitComponent,
  WorkVisitAllComponent,
WorkVisitAssignedComponent,
WorkVisitCompletedComponent,
WorkVisitConfirmedComponent,
WorkVisitAssignedDetailsComponent,
WorkVisitConfirmedDetailsComponent,
WorkVisitDetailsComponent,
WorkVisitDetailsEngineerComponent,
WorkVisitRescheduleComponent,
CreateWorkVisitComponent,
NavbarComponent],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WorkVisitComponent,
        children :[
          {path:'',redirectTo:'new-request',pathMatch:'full'},
          {
            path: 'new-request',
            component: WorkVisitComponent,
          },
        ]
      },
      {
        path: 'work-visit-all',
        component: WorkVisitAllComponent,
      },
      {
        path: 'work-visit-assigned',
        component: WorkVisitAssignedComponent,
      },
      {
        path: 'work-visit-assigned-details',
        component: WorkVisitAssignedDetailsComponent,
      },
      {
        path: 'work-visit-completed',
        component: WorkVisitCompletedComponent,
      },
      {
        path: 'work-visit-confirmed',
        component: WorkVisitConfirmedComponent,
      },
      {
        path: 'work-visit-confirmed-details',
        component: WorkVisitConfirmedDetailsComponent,
      },
      {
        path: 'work-visit-details',
        component: WorkVisitDetailsComponent,
      },
      {
        path: 'work-visit-details-engineer',
        component: WorkVisitDetailsEngineerComponent,
      },
      {
        path: 'work-visit-reschedule',
        component: WorkVisitRescheduleComponent,
      },
      {
        path: 'create-work-visit',
        component: CreateSiteVisitComponent,
      },

    ])
  ]
})
export class WorkVisitModule { }
