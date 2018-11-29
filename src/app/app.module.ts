import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppRoutingCoreModule } from 'dss-component-loader';//from core

import { componentList } from '../environments/component-list';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
     AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingCoreModule.forRoot({AppConfig: componentList}),//AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
