import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLoaderDirectiveModule } from 'zed-component-loader/src/shared/directives/component-loader.directive.module' 
import { ProfileComponentModule } from 'zed-component-loader/src/components/profile/profile.component.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile';
import { ProfileHkComponent } from '../profile-hk/profile-hk/profile-hk.component';
import { ProfileHkModule } from '../profile-hk/profile-hk.module';
import { ProfileThaiModule } from '../profile-thai/profile-thai.module';
import { ProfileThaiComponent } from '../profile-thai/profile-thai/profile-thai.component';
import { ProfileDefaultModule } from '../profile-default/profile-default.module';
import { ProfileDefaultComponent } from '../profile-default/profile-default/profile-default.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    
    ComponentLoaderDirectiveModule,
    ProfileComponentModule,

    ProfileDefaultModule,
    ProfileHkModule,
    ProfileThaiModule
  ],
  exports: [],
  declarations: [ ProfileComponent ],
  entryComponents: [ ProfileHkComponent, ProfileThaiComponent, ProfileDefaultComponent ]
})
export class ProfileModule { }