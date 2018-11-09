import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoute } from './profile.route';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoute
  ],
  declarations: [ ProfileComponent ],
  entryComponents: [ ]
})
export class ProfileModule { }