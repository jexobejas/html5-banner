import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import { BannersService } from '../../services/banners.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit  {
	clients = [];
	selectedClient = {};

	constructor(public dialogRef: MdDialogRef<ClientsListComponent>,
				private _bannersService: BannersService) {}

	ngOnInit() {
		this._bannersService.getClients()
			.subscribe(resClientsData => this.clients = resClientsData);
	}

	onChange() {
		console.log(this.selectedClient)
	}

}
