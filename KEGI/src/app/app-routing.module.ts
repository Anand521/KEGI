import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /**  {
    path :'',
    loadChildren :()=>import('./login/login.module').then((m)=>m.LoginModule)

  },*/

  {
    path :'',
    loadChildren:()=>import('./login/login.module').then((m)=>m.LoginModule)
  },
  {
    path :'engineer',
    loadChildren : () => import ('./engineer/engineer.module').then((m)=>m.EngineerModule)
  },
  {
    path :'office-assistant',
    loadChildren :()=> import('./office-assistant/office-assistant.module').then((m)=>m.OfficeAssistantModule)
  },
  {
    path:'site-visit',
    loadChildren:()=>import('./office-assistant/site-visit/site-visit.module').then((m)=>m.SiteVisitModule)
  },
  {
    path:'work-visit',
    loadChildren :()=>import('./office-assistant/work-visit/work-visit.module').then((m)=>m.WorkVisitModule)
  },
  // {
  //   path:'supervisor-schedule',
  //   loadChildren:()=>import('./office-assistant/supervisor-schedule/supervisor-schedule.module').then((m)=>m.SupervisorScheduleModule)
  // }

];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
