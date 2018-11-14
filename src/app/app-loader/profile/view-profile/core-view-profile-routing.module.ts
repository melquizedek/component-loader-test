import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwitchViewProfileComponent } from './core-view-profile.component';

const routes: Routes = [
	{
		path: '',
		component: SwitchViewProfileComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreViewProfileRoutingModule { }
