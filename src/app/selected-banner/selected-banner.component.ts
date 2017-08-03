import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as _ from 'underscore';
import * as html2canvas from 'html2canvas';
import * as $ from 'jquery';

import { BannersService } from './../services/banners.service';

@Component({
	selector: 'selected-banner',
	templateUrl: './selected-banner.component.html',
	styleUrls: ['./selected-banner.component.css']
})
export class SelectedBannerComponent implements OnInit {

	banner_url: SafeResourceUrl = null;
	banner: object = {
		name: null
	};
	project: object = {
		name: null,
		banners: []
	};
	client: object = {
		name: null
	};

	constructor(private route: ActivatedRoute,
				public sanitizer:DomSanitizer,
				private _bannersService: BannersService) {}

	ngOnInit() {
		this.route.params
			.map(params => params)
			.subscribe((params) => {
				
				var client_code = params.client;
				var project_code = params.project;
				var banner_name = params.banner;
				var url = './assets/banners/' + params.client + '/' + params.project + '/' + params.banner + '/index.html';

				this.banner_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);

				this.prepareData(client_code, project_code, banner_name);

				if (_.isEmpty(this.client)) {
					this._bannersService
						.fetchClients()
						.subscribe(resClientsData => this.prepareData(client_code, project_code, banner_name));
				}
				
				
			});
	}

	prepareData(client_code, project_code, banner_name) {
		this.client = this._bannersService.getClient(client_code);
		this.banner = this._bannersService.getBanner(client_code, project_code, banner_name);
		this.project = this._bannersService.getProjectByClientCodeAndProjectCode(client_code, project_code);
	}

	download(client, project, banner) {
		var iframe = null;

		iframe = $('#banner').contents()[0];
		var base = document.createElement('base');
		base.href = `/assets/banners/ig/spring_banners/fr_garbage_300x250/`;

		$(iframe.head).prepend(base);
		html2canvas(iframe.body, {useCORS: true, letterRendering: true}).then(function(canvas) {
		     var img = canvas.toDataURL()
		      //  console.log(img);
		        window.open(img);
		});

		// this._bannersService.downloadBanner({test: 1})
		// 	.subscribe(result => {
		// 		console.log(result);
		// 	});
	}
}
