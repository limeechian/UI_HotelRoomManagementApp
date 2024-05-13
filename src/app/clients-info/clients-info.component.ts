import { Component, OnInit } from '@angular/core';
import { ClientsInfoComponentModel } from './clients-info.component.model';
import { ClientsInfoService } from './clients-info.service';

@Component({
  selector: 'app-clients-info',
  templateUrl: './clients-info.component.html',
  styleUrls: ['./clients-info.component.css']
})
export class ClientsInfoComponent implements OnInit {
  clients: ClientsInfoComponentModel[] = [];

  constructor(private clientsService: ClientsInfoService) { }

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients() {
    this.clientsService.GetClientList()
      .subscribe((data: ClientsInfoComponentModel[]) => {
        console.log('Received data:', data);
        this.clients = data;

    })
  }
}
