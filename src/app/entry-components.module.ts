import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
      CommonModule,
      MaterialModule
  ],
  declarations: [
      ProfileComponent
  ],
  entryComponents: [
      ProfileComponent
  ]
})
export class EntryComponentsModule { }
