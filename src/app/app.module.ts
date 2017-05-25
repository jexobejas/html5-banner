import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdButtonModule, MdCheckboxModule, MdIconModule, MdSidenavModule, MdToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SelectedBannerComponent } from './selected-banner/selected-banner.component';
import { BannerMenusComponent } from './banner-menus/banner-menus.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectedBannerComponent,
    BannerMenusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule
  ],
  exports: [
    MdButtonModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
