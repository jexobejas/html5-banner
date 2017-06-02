import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'banner-menus',
	templateUrl: './banner-menus.component.html',
	styleUrls: ['./banner-menus.component.css'],
	encapsulation: ViewEncapsulation.None,
})

export class BannerMenusComponent implements OnInit {
	constructor() { }

	@Input() project = null;
	@Input() selectedBanner = null;
	@Input() client = null;

	ngOnInit() {
		
	}

}
