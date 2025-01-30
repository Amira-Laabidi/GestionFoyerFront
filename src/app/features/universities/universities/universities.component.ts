import { Component } from '@angular/core';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent {

  tabs: string[] = ['All', 'Nord', 'Ouest','South'];
  activeTab: string = 'All';
  searchQuery: string = '';
  selectedCategory: string = 'All';




  reservations = [
    { title: 'Miniso Inc.', message: 'reserved a table for 5', time: '2 minutes ago', hasActions: true },
    { title: 'Aminoc.', message: 'reservation approved', time: '2 minutes ago', hasActions: false },
    { title: 'Foxc.', message: 'event reservation confirmed', time: '2 minutes ago', hasActions: false },
    { title: 'Astrazenec.', message: 'sending payment details', time: '2 minutes ago', hasActions: false },
    { title: 'Homedeccor.', message: 'reservation declined', time: 'Yesterday', hasActions: true },
  ];

  filteredReservations = [...this.reservations];
  pendingRequestsCount: number = 1;

  ngOnInit() {
    this.filterReservations();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.filterReservations();
  }

  filterReservations() {
    this.filteredReservations = this.reservations.filter((reservation) => {
      const matchesSearch = reservation.title
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
      const matchesCategory =
        this.selectedCategory === 'All' || reservation.message.includes(this.selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }
}
