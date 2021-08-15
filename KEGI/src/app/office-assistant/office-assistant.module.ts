import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SupervisorScheduleComponent } from './supervisor-schedule/supervisor-schedule.component';


@NgModule({
  declarations: [HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children:[{path:'',redirectTo:'home',pathMatch:'full'},
          {
          path: 'home',
        component: HomeComponent,
        }]
      },
      {
        path:'supervisor-schedule',
        component:SupervisorScheduleComponent
      }
    ]),
  ],
  exports: [RouterModule],
})
export class OfficeAssistantModule {}
