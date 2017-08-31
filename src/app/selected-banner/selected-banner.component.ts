import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as _ from 'underscore';
import * as html2canvas from 'html2canvas';
import * as $ from 'jquery';

import { BannersService } from './../services/banners.service';
import { BannerPreviewComponent } from './../modals/banner-preview/banner-preview.component';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'selected-banner',
	templateUrl: './selected-banner.component.html',
	styleUrls: ['./selected-banner.component.css']
})
export class SelectedBannerComponent implements OnInit {
	orig_banner_url = null;
	banner_url: SafeResourceUrl = null;
	banner_preview = null;
	banner: object = {
		name: null,
		preview: null
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
				private _bannersService: BannersService,
				public dialog: MdDialog) {}

	ngOnInit() {
		this.route.params
			.map(params => params)
			.subscribe((params) => {
				
				var client_code = params.client;
				var project_code = params.project;
				var banner_name = params.banner;
				var url = './assets/banners/' + params.client + '/' + params.project + '/' + params.banner + '/index.html';

				this.orig_banner_url = url;
				this.banner_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);

				this.prepareData(client_code, project_code, banner_name);

				if (_.isEmpty(this.client)) {
					this._bannersService
						.fetchClients()
						.subscribe(resClientsData => this.prepareData(client_code, project_code, banner_name));
				}

				this._bannersService
					.getBannerPreview(client_code, project_code, banner_name)
					.subscribe((result) =>  {
						this.banner_preview = result.data;
					});
			});
	}

	showPreview() {
		let dialogRef = this.dialog

		dialogRef.open(BannerPreviewComponent, {
			disableClose: true,
			data: {
				previewImg: this.banner_preview
			}
		})
		.afterClosed();
	}

	prepareData(client_code, project_code, banner_name) {
		this.client = this._bannersService.getClient(client_code);
		this.banner = this._bannersService.getBanner(client_code, project_code, banner_name);
		this.project = this._bannersService.getProjectByClientCodeAndProjectCode(client_code, project_code);
	}

	download(client, project, banner) {
		console.log('download')
	}

	refreshBanner() {
		let banner_url = this.orig_banner_url + '?' + Math.floor((Math.random() * 100) + 1);

		this.banner_url = this.sanitizer.bypassSecurityTrustResourceUrl(banner_url);
	}

	getCompressBanner(client, project, banner) {
		var client_code = client.code;
		var project_code = project.code;
		var banner_name = banner.name;

		this._bannersService
			.getCompressBanner(client_code, project_code, banner_name)
			.subscribe((result) =>  {
				var a = document.createElement('a');
				a.href = result.data;
				a.download = banner_name;
				document.body.appendChild(a);
				a.click();
				a.remove();
			});
	}
}
