import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoute } from './profile.route';
import { ProfileComponent } from './profile.component';
import { MainModule } from 'dss-component-loader';
import { componentList } from '../../environments/component-list';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoute,
    MainModule.forRoot({AppConfig: componentList})
  ],
  declarations: [ ProfileComponent ],
  entryComponents: [ ]
})
export class ProfileModule { }