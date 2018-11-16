import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './view-profile.component';
import { ViewProfileCoreComponent } from 'dss-component-loader';

export const routes: Routes = [
    {
        path: '',
        component: (false) ? ViewProfileComponent : ViewProfileCoreComponent
    }
];

export const ViewProfileRoute: ModuleWithProviders = RouterModule.forChild(routes);
