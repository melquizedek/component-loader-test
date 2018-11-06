import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatButtonModule } from '@angular/material';

import { ProfileThaiComponent } from './profile-thai/profile-thai.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule
  ],
  declarations: [ProfileThaiComponent]
})
export class ProfileThaiModule { }
