import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreProfileComponent } from './core-profile.component';

const routes: Routes = [
	{
		path: '',
		component: CoreProfileComponent,
		children: [
			{
				path: 'view',
				loadChildren: './view-profile/core-view-profile.module#CoreViewProfileModule'
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreProfileRoutingModule { }
