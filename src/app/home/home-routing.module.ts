import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardAdminComponent } from '../dashboard/dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'account',
        loadChildren: () =>
          import('./../features/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./../features/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'universities',
        loadChildren: () =>
          import('./../features/universities/universities.module').then(
            (m) => m.UniversitiesModule
          ),
      },
      {
        path: 'reservation',
        loadChildren: () =>
          import('./../features/reservations/reservations.module').then(
            (m) => m.ReservationsModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'awatef',
        component: DashboardAdminComponent, // Use the component directly
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule],
})
export class HomeRoutingModule {}
