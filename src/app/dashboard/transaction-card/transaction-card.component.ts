import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent {
  transactions = [
    {
      type: 'Subscription Payment',
      date: 'Today, August 20, 2021 (10:06 PM)',
      amount: 1200
    },
    {
      type: 'Influencer Income',
      date: 'Today, August 20, 2021 (10:06 PM)',
      amount: 1200
    },
    {
      type: 'Influencer Income',
      date: 'Today, August 20, 2021 (10:06 PM)',
      amount: 1200
    },
    {
      type: 'Subscription Payment',
      date: 'Today, August 20, 2021 (10:06 PM)',
      amount: 1200
    },
    {
      type: 'Influencer Income',
      date: 'Today, August 20, 2021 (10:06 PM)',
      amount: 1200
    },
    {
      type: 'Influencer Income',
      date: 'Today, August 20, 2021 (10:06 PM)',
      amount: 1200
    }
  ];
}
