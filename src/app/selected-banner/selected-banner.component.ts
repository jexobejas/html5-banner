import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { BannersService } from './../services/banners.service';

@Component({
	selector: 'selected-banner',
	templateUrl: './selected-banner.component.html',
	styleUrls: ['./selected-banner.component.css']
})
export class SelectedBannerComponent implements OnInit {

	banner_url: SafeResourceUrl = null;
	banner: object = null;
	project: object = null;
	client: object = null;

	constructor(private route: ActivatedRoute,
				public sanitizer:DomSanitizer,
				private _bannersService: BannersService) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			var client_code = params.client;
			var project_code = params.project;
			var banner_name = params.banner;
			var url = './assets/banners/' + params.client + '/' + params.project + '/' + params.banner + '/index.html';

			this.banner_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);

			this.banner = this._bannersService.getBanner(client_code, project_code, banner_name);
			this.project = this._bannersService.getProjectByClientCodeAndProjectCode(client_code, project_code);
			this.client = this._bannersService.getClient(client_code);
			console.log([this.banner, this.project])
	  	});
	}

}
