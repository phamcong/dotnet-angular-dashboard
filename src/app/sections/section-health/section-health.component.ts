import { Component, OnInit } from '@angular/core'
import { Server } from 'src/app/shared/server'

const SAMPLE_SERVERS = [
  { id: 1, name: 'dev-web', isOnline: true },
  { id: 2, name: 'dev-mail', isOnline: false },
  { id: 3, name: 'prod-web', isOnline: true },
  { id: 4, name: 'prod-mail', isOnline: true }
]

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.scss']
})
export class SectionHealthComponent implements OnInit {

  public servers: Server[] = SAMPLE_SERVERS
  constructor() { }

  ngOnInit(): void {
  }

}
