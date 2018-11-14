import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModule } from 'dss-component-loader';

import { CoreViewProfileRoutingModule } from './core-view-profile-routing.module';
import { CoreViewProfileComponent, SwitchViewProfileComponent } from './core-view-profile.component';
import { componentList } from '../../../../environments/component-list';
import { ViewProfileComponent } from '../../../profile/view-profile/view-profile.component';

@NgModule({
  imports: [
    CommonModule,
    CoreViewProfileRoutingModule,
    MainModule.forRoot({AppConfig: componentList})
  ],
  declarations: [SwitchViewProfileComponent, CoreViewProfileComponent, ViewProfileComponent],
  entryComponents: [CoreViewProfileComponent, ViewProfileComponent]
})
export class CoreViewProfileModule { }
