import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderModule } from './loader/loader.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, SharedModule.forRoot(), LoaderModule ],
  declarations: [AppComponent],
  providers: [
  SystemJsNgModuleLoader,
  {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
