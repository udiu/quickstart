import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { LabelInputComponent }   from './app.component';

@NgModule({
  // Since the QuickStart application is a web application that runs in a browser, 
  //  your root module needs to import the BrowserModule from @angular/platform-browser.
  imports:      [ BrowserModule ],
  
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
