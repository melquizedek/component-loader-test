import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCoreComponent } from 'dss-component-loader';// from core
import { componentList } from '../environments/component-list';

const profileComponent = (componentList['ProfileModule']['ProfileComponent']) 
    ? componentList['ProfileModule']['ProfileComponent'] : ProfileCoreComponent;

const routes: Routes = [
    {
        path: 'profile',
        //loadChildren: './profile/profile.module#ProfileModule'
        component: profileComponent
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
