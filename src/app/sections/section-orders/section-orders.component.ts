import { Component, OnInit } from '@angular/core'
import { Order } from 'src/app/shared/order'

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {
  public orders: Order[] = [...Array(5)].map(item => (
    {
      id: 1,
      customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com' },
      total: 230, placed: new Date(2020, 1, 1),
      fulfilled: new Date(2020, 2, 1),
      status: 'Completed'
    }
  ))

  constructor() { }

  ngOnInit(): void {
  }

}
