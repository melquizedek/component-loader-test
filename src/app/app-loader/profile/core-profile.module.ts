import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreProfileRoutingModule } from './core-profile-routing.module';
import { CoreProfileComponent } from './core-profile.component';

@NgModule({
  imports: [
    CommonModule,
    CoreProfileRoutingModule
  ],
  declarations: [CoreProfileComponent]
})
export class CoreProfileModule { }
