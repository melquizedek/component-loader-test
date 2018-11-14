import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'profile',
		loadChildren: './app-loader/profile/core-profile.module#CoreProfileModule'
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
