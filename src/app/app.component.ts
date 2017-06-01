import { Component, ViewEncapsulation } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { ClientsListComponent } from './modals/clients-list/clients-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
	client = {
		name: null,
		project: {
			banners: null
		}
	};

	banner = null;

	constructor(public dialog: MdDialog) {
		let dialogRef = this.dialog

		dialogRef.open(ClientsListComponent, {
				disableClose: true,
				width: '300px',
				height: '350px',
			})
			.afterClosed()
			.subscribe(result => {
				this.client = result;
				this.banner = result.selectedBanner;
			});
	}

	ngOnInit() {
		
	}
}
