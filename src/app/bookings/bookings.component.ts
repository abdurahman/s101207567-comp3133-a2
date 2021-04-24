import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];

  displayedColumns = [
    'hotel_id',
    'booking_date',
    'booking_start',
    'booking_end',
    'user_id',
  ];

  constructor(private apollo: Apollo) {}
  ngOnInit(): void {
    this.apollo
      .query<any>({
        query: gql`
          {
            getBooking {
              hotel_id
              booking_date
              booking_start
              booking_end
              user_id
            }
          }
        `,
      })
      .subscribe(({ data }) => {
        this.bookings = data && data.getBooking;
      });
  }

}
