import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderModule } from './loader/loader.module';

import { SharedModule } from './shared/shared.module';
import { SampleModule } from 'angular-library-starter' // or name of your library;

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, SharedModule.forRoot(), LoaderModule, SampleModule.forRoot() ],
  declarations: [AppComponent],
  providers: [
  {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
