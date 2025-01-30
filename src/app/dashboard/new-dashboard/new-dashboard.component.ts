import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from 'src/app/shared/dialogs/add-dialog/add-dialog.component';
import { ReservationDialogComponent } from 'src/app/shared/dialogs/reservation-dialog/reservation-dialog.component';

@Component({
  selector: 'app-new-dashboard',
  templateUrl: './new-dashboard.component.html',
  styleUrls: ['./new-dashboard.component.css'],
})
export class NewDashboardComponent {
  searchText?: string;
  constructor(private dialog: MatDialog) {}
  addNewStudent() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data:{
        title:"reservation"
      }
    });
  }

  addNewReservation() {
    const dialogRef = this.dialog.open(ReservationDialogComponent, {});
  }
}
