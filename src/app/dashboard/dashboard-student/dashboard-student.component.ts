import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent {
searchText: any;

requests = [
  {
    title: 'Request 1',
    description: 'This is a description of request 1',
    status: 'pending' // Example status: pending, in-progress, completed
  },
  {
    title: 'Request 2',
    description: 'This is a description of request 2',
    status: 'in-progress'
  },
  // {
  //   title: 'Request 3',
  //   description: 'This is a description of request 3',
  //   status: 'completed'
  // }
];

// Get the appropriate icon based on the request status
getStatusIcon(status: string): string {
  switch (status) {
    case 'pending':
      return 'hourglass_empty'; // Example icon for pending
    case 'in-progress':
      return 'build'; // Example icon for in-progress
    case 'completed':
      return 'check_circle'; // Example icon for completed
    default:
      return 'help'; // Default icon
  }
}

// Get the appropriate CSS class based on the request status
getStatusClass(status: string): string {
  switch (status) {
    case 'pending':
      return 'status-pending';
    case 'in-progress':
      return 'status-in-progress';
    case 'completed':
      return 'status-completed';
    default:
      return 'status-unknown';
  }
}

}
