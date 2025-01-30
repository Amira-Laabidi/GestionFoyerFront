import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';
import { UniversitiesCardComponent } from './universities-card/universities-card.component';
import { OverviewCardComponent } from './overview-card/overview-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    DashboardStudentComponent,
    NewDashboardComponent,
    TransactionCardComponent,
    UniversitiesCardComponent,
    OverviewCardComponent
  ],
  imports: [
   CommonModule,    
   DashboardRoutingModule,
   FormsModule,
   MatButtonModule,
   MatInputModule,
   MatIconModule,
   MatSortModule,
   MatTableModule,
   MatToolbarModule,
   MatPaginatorModule,
   ReactiveFormsModule,
   MatDialogModule,
   MatCardModule
  //  SlickCarouselModule
   
  ],
  exports: [
    DashboardStudentComponent,
    DashboardAdminComponent,
    UniversitiesCardComponent
  ]
})
export class DashboardModule { }
