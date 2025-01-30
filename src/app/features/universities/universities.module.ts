import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversitiesRoutingModule } from './universities-routing.module';
import { UniversitiesComponent } from './universities/universities.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardModule } from "../../dashboard/dashboard.module";

@NgModule({
  declarations: [UniversitiesComponent],
  imports: [CommonModule, UniversitiesRoutingModule, MatIconModule, DashboardModule],
})
export class UniversitiesModule {}
