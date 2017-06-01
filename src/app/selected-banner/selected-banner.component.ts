import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'selected-banner',
	templateUrl: './selected-banner.component.html',
	styleUrls: ['./selected-banner.component.css']
})
export class SelectedBannerComponent implements OnInit {

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
		    console.log(params);
	  	});
	}

}
