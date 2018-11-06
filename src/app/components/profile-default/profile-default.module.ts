import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatButtonModule } from '@angular/material';

import { ProfileDefaultComponent } from './profile-default/profile-default.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ProfileDefaultComponent]
})
export class ProfileDefaultModule { }