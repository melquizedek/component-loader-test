import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent
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

export class AppRoutingModule {}
