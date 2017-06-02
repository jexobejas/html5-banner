import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SelectedBannerComponent } from './selected-banner/selected-banner.component';

export const router: Routes = [
    { 
    	path: 'client/:client/:project/:banner', 
    	component: SelectedBannerComponent, 
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);