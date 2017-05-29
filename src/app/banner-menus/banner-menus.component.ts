import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BannersService } from '../services/banners.service';

@Component({
	selector: 'banner-menus',
	templateUrl: './banner-menus.component.html',
	styleUrls: ['./banner-menus.component.css'],
	encapsulation: ViewEncapsulation.None,
})

export class BannerMenusComponent implements OnInit {
	clients = [];

	constructor(private _bannersService: BannersService) { }

	ngOnInit() {
		this._bannersService.getClients()
			.subscribe(resClientsData => this.clients = resClientsData);

		
	}

}
