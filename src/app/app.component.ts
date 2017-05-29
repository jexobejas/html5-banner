import { Component, ViewEncapsulation } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { ClientsListComponent } from './modals/clients-list/clients-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
	title = 'app works!';
	selectedOption: string;

	constructor(public dialog: MdDialog) {
		let dialogRef = this.dialog.open(ClientsListComponent, {
			disableClose: true,
			width: '300px',
			height: '300px',
		});
	}

	ngOnInit() {
		
	}
}
