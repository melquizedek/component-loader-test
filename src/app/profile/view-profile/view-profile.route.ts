import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunViewProfileComponent } from './view-profile.component';

export const routes: Routes = [
    {
        path: '',
        component: RunViewProfileComponent
    }
];

export const ViewProfileRoute: ModuleWithProviders = RouterModule.forChild(routes);
