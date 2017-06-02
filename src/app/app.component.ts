import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { ClientsListComponent } from './modals/clients-list/clients-list.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit  {
	constructor(public dialog: MdDialog) {
		let dialogRef = this.dialog

		dialogRef.open(ClientsListComponent, {
			disableClose: true,
			width: '300px',
			height: '350px',
		})
		.afterClosed();
	}

	ngOnInit() {
		console.log(routes)
	}
}
