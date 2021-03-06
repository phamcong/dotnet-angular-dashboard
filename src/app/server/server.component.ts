import { Component, Input, OnInit } from '@angular/core'
import { Server } from '../shared/server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  @Input() serverInput: Server
  public color: string
  public buttonText: string

  constructor() { }

  ngOnInit(): void {
    this.setServerAction(this.serverInput.isOnline)
  }

  setServerAction = (isOnline: boolean) => {
    if (isOnline) {
      this.serverInput.isOnline = true
      this.color = '#66BB6A'
      this.buttonText = 'Shut Down'
    } else {
      this.serverInput.isOnline = false
      this.color = '#FF6B6B'
      this.buttonText = 'Start'
    }
  }

  toggleStatus = (onlineStatus: boolean) => {
    this.setServerAction(onlineStatus)
  }
}
