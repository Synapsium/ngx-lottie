import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LottieModule } from 'ngx-lottie-dev';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LottieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
