import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef} from '@angular/material';

import { BannersService } from '../../services/banners.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})

export class ClientsListComponent implements OnInit  {
	clients = [];
	selectedClient = {name: null, code: null, project: null};
	selectedProject = {name: null, code: null, banners: null};
	selectedBanner = {name: null};

	constructor(public dialogRef: MdDialogRef<ClientsListComponent>,
				private _bannersService: BannersService,
				private router: Router) {}

	ngOnInit() {
		this._bannersService.getClients()
			.subscribe(resClientsData => this.clients = resClientsData);
	}

	goTo() {
		var client = this.selectedClient;
		var project = this.selectedProject;
		var banner = this.selectedBanner;

		if (banner.name) {
			this.router.navigate(['/client', client.code, project.code, banner.name]);
		}

		this.dialogRef.close({
			name: client.name,
			code: client.code,
			project: project,
			selectedBanner: banner
		});
	}
}
