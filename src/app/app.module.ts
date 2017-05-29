import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdSelectModule, MdButtonModule, MdDialogModule, MdCheckboxModule, MdIconModule, MdSidenavModule, MdToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SelectedBannerComponent } from './selected-banner/selected-banner.component';
import { BannerMenusComponent } from './banner-menus/banner-menus.component';

import { BannersService } from './services/banners.service';

import { ClientsListComponent } from './modals/clients-list/clients-list.component';

@NgModule({
	declarations: [
		AppComponent,
		SelectedBannerComponent,
		BannerMenusComponent,
		ClientsListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		MdSelectModule, MdButtonModule, MdDialogModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule
	],
	exports: [
		MdSelectModule, MdButtonModule, MdDialogModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule
	],
	entryComponents: [
		ClientsListComponent
	],
	providers: [BannersService],
	bootstrap: [AppComponent]
})
export class AppModule { }
