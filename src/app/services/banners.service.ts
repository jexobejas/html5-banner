import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class BannersService {

	private _url = './assets/data/clients.json';

	constructor(private _http: Http){}

	getClients() {
		return this._http.get(this._url)
			.map((response: Response) => response.json());
	}
}