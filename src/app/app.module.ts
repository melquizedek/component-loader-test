import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainModule, AppRoutingCoreModule } from 'dss-component-loader';//from core

import { componentList } from '../environments/component-list';
//import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material.module';

import { ComponentLoaderModule } from './component-loader/component-loader.module';

@NgModule({
  declarations: [
     AppComponent,
     //ProfileComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingCoreModule.forRoot({AppConfig: componentList}),//AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
