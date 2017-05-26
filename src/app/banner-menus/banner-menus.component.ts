import { Component, OnInit } from '@angular/core';

import { BannersService } from '../services/banners.service';

@Component({
	selector: 'banner-menus',
	templateUrl: './banner-menus.component.html',
	styleUrls: ['./banner-menus.component.css'],
})

export class BannerMenusComponent implements OnInit {
	clients = [];

	constructor(private _bannersService: BannersService) { }

	ngOnInit() {
		this._bannersService.getClients()
			.subscribe(resClientsData => this.clients = resClientsData);
	}

}
