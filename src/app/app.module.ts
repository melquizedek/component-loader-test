import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainModule } from 'dss-component-loader';//from core
import { componentList } from '../environments/component-list';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
     AppComponent,
     ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MainModule.forRoot({AppConfig: componentList})// from core
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
