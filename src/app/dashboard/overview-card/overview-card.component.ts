import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.css']
})
export class OverviewCardComponent {


  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true
  };

  campaigns = [
    {
      title: 'Blue Chips Chicago',
      date: 'Today, August 20, 2021',
      time: '10:06 PM',
      status: 'Active',
      statusClass: 'active',
      avatars: [
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/3.jpg'
      ]
    },
    {
      title: 'Global Trends London',
      date: 'Yesterday, August 19, 2021',
      time: '08:00 PM',
      status: 'Paused',
      statusClass: 'paused',
      avatars: [
        'https://randomuser.me/api/portraits/women/4.jpg',
        'https://randomuser.me/api/portraits/men/5.jpg'
      ]
    }
  ];
}
