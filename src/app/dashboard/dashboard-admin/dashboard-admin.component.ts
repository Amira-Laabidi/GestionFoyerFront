import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from 'src/app/shared/dialogs/add-dialog/add-dialog.component';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  constructor(public dialog: MatDialog){}


  myName:string = "wael"


  deleteItem(_t96: any,arg1: any,arg2: any,arg3: any,arg4: any) {
    throw new Error('Method not implemented.');
    }
    startEdit(arg: any,id: any,title: any,arg3: any,arg4: any,arg5: any,arg6: any) {
      const dialogRef = this.dialog.open(AddDialogComponent, {
       data:{
        id: id,
        title: title,
        state: "",
        url: "",
        created_at: "",
        updated_at: "",
        email:"",
        class:"",
        enrollmentDate:"",
        name:title,
       }
      });
    // throw new Error('Method not implemented.');
    }
    addNew() {
     
      const dialogRef = this.dialog.open(AddDialogComponent, {
      
      });
     
  
    }
  
  
    displayedColumns = ['id', 'title', 'state', 'url', 'created_at', 'updated_at', 'actions'];
    dataSource = [
      {
        id: 1,
        title: 'amira laabidi',
        state: 'Active',
        url: 'https://example.com/1',
        created_at: '2024-01-01',
        updated_at: '2024-01-02',
      },
      {
        id: 1,
        title: 'ayette ayette',
        state: 'Active',
        url: 'https://example.com/1',
        created_at: '2024-01-01',
        updated_at: '2024-01-02',
      },
      {
        id: 2,
        title: 'fhemtek hasnaoui formateur',
        state: 'Inactive',
        url: 'https://example.com/2',
        created_at: '2024-02-01',
        updated_at: '2024-02-02',
      },
      {
        id: 3,
        title: 'hend hasnaoui',
        state: 'Active',
        url: 'https://example.com/3',
        created_at: '2024-03-01',
        updated_at: '2024-03-02',
      },
      {
        id: 4,
        title: 'awatef jemaa',
        state: 'Pending',
        url: 'https://example.com/4',
        created_at: '2024-04-01',
        updated_at: '2024-04-02',
      },
      {
        id: 5,
        title: 'wassim mannai',
        state: 'Active',
        url: 'https://example.com/5',
        created_at: '2024-05-01',
        updated_at: '2024-05-02',
      },
      {
        id: 5,
        title: 'maroua touhemi',
        state: 'Active',
        url: 'https://example.com/5',
        created_at: '2024-05-01',
        updated_at: '2024-05-02',
      },
    ];
}
