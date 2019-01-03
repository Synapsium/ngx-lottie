import { NgModule } from '@angular/core';
import { LottieComponent } from './lottie.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LottieComponent],
  exports: [LottieComponent]
})
export class LottieModule { }
