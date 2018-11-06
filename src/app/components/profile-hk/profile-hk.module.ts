import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { ProfileHkComponent } from './profile-hk/profile-hk.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule
  ],
  declarations: [ProfileHkComponent]
})
export class ProfileHkModule { }
