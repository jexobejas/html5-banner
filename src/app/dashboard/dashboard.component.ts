import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { ClientsListComponent } from './../modals/clients-list/clients-list.component';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(public dialog: MdDialog) { }

	ngOnInit() {
	}

	showModal() {
		let dialogRef = this.dialog

		dialogRef.open(ClientsListComponent, {
			disableClose: true,
			width: '300px',
			height: '350px',
		})
		.afterClosed();
	}
}
