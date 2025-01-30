import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';

const routes: Routes = [
    {path:'admin',component: DashboardAdminComponent},
    {path:'student',component: DashboardStudentComponent},
    {path:'admin',component:NewDashboardComponent}
  // {
  //   path: 'admin',component: DashboardAdminComponent,children: [
  //     {path: 'student',component: DashboardStudentComponent}
  //   ]
  // },

  // {
  //   path: 'admin',component: DashboardAdminComponent
  // },
  // {path: 'student',component: DashboardStudentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
