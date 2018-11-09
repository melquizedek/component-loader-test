import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ViewProfileComponent } from './view-profile.component';

export const routes: Routes = [
    {
        path: '',
        component: ViewProfileComponent
    }
];

export const ViewProfileRoute: ModuleWithProviders = RouterModule.forChild(routes);
