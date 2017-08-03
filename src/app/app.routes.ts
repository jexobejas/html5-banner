import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SelectedBannerComponent } from './selected-banner/selected-banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const router: Routes = [
    { 
    	path: 'client/:client/:project/:banner', 
    	component: SelectedBannerComponent,
    },
    { 
    	path: 'dashboard', 
    	component: DashboardComponent, 
    },
    {     
        path: '**', 
        redirectTo: '/dashboard' 
    },
    {     
        path: '', 
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);