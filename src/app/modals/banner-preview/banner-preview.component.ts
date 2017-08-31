import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'banner-preview',
  templateUrl: './banner-preview.component.html',
  styleUrls: ['./banner-preview.component.css']
})

export class BannerPreviewComponent implements OnInit  {
	previewImg = null;

	constructor(public dialogRef: MdDialogRef<BannerPreviewComponent>,
				@Inject(MD_DIALOG_DATA) public data: any) {}

	ngOnInit() {
		this.previewImg = this.data.previewImg;
	}
}
