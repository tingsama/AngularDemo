import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "No Server Was Created.";
  createdServerName = '';
  servers = ['server one', 'server two'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was Created: " + this.createdServerName;
    this.servers.push(this.createdServerName);
  }
}
