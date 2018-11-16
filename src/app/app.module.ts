import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//import { AppLoaderModule } from 'xyzapploader';

//import { componentList } from '../environments/component-list';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
     AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AppLoaderModule.forRoot({AppConfig: componentList})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
