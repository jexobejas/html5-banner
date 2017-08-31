import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdSelectModule, MdButtonModule, MdDialogModule, MdCheckboxModule, MdIconModule, MdSidenavModule, MdToolbarModule, MdTooltipModule} from '@angular/material';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { SelectedBannerComponent } from './selected-banner/selected-banner.component';
import { BannerMenusComponent } from './banner-menus/banner-menus.component';

import { BannersService } from './services/banners.service';

import { ClientsListComponent } from './modals/clients-list/clients-list.component';
import { BannerPreviewComponent } from './modals/banner-preview/banner-preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		SelectedBannerComponent,
		BannerMenusComponent,
		ClientsListComponent,
		BannerPreviewComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		MdSelectModule, MdButtonModule, MdDialogModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule, MdTooltipModule,
		routes
	],
	exports: [
		MdSelectModule, MdButtonModule, MdDialogModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule, MdTooltipModule,
	],
	entryComponents: [
		ClientsListComponent,
		BannerPreviewComponent
	],
	providers: [BannersService, {provide: APP_BASE_HREF, useValue: '/app'}],
	bootstrap: [AppComponent]
})
export class AppModule { }
