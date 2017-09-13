import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import * as _ from 'underscore';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class BannersService {

	private _url = './assets/data/clients.json';
	private _apiUrl = environment.api_url;
	private clients:Array<any> = [];

	constructor(private _http: Http){}

	fetchClients(): Observable<any> {
		return this._http.get(this._url)
					.map((response: Response) => {
						this.clients = response.json();

						return this.clients;
					});
	}

	getClients(): Array<any> {
		return this.clients;
	}

	getBannerPreview(client_code: string, project_code: string, banner_name: string): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
  		let params = JSON.stringify({client_code: client_code, project_code: project_code, banner_name: banner_name});
  		let url = this._apiUrl + '/bannerPreview';

		return this._http.post(url, params, options)
					.map((response: Response) => response.json());
	}

	getCompressBanner(client_code: string, project_code: string, banner_name: string): void {
		let url = this._apiUrl + '/compressBanner/' + client_code + '/' + project_code + '/' + banner_name;

		window.open(url, '_blank');
	}

	getBanner(client_code: string, project_code: string, banner_name: string): object {
		var clients = this.getClients();

		var filteredClient = this.findClientByCode(client_code, clients);
		var filteredProject = this.findProjectByCode(project_code, filteredClient);
		var filteredBanner = this.findBannerByName(banner_name, filteredProject);

		return filteredBanner;
	}

	getClient(code): object {
		var clients = this.getClients();
		var filteredClient = this.findClientByCode(code, clients);

		return filteredClient;
	}

	getProjectByClientCodeAndProjectCode(client_code, project_code): object {
		var clients = this.getClients();

		var filteredClient = this.findClientByCode(client_code, clients);
		var filteredProject = this.findProjectByCode(project_code, filteredClient);

		return filteredProject;
	}

	findClientByCode(code: any, clients: any) {
		return _.findWhere(clients, {code: code});
	}

	findProjectByCode(code: any, client: any = {}) {
		return _.findWhere(client.projects, {code: code});
	}

	findBannerByName(name: any, project: any = {}) {
		return _.findWhere(project.banners, {name: name});
	}

	downloadBanner(banner: any): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
  		let params = JSON.stringify(banner);
  		let url = this._apiUrl + '/downloadBanner';

		return this._http.post(url, params, options)
					.map((response: Response) => response.json());
	}
}