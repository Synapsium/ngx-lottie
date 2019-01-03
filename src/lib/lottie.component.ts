import { Component, Inject, Optional, ViewChild, ElementRef, Input, Output, OnInit, AfterViewInit, OnChanges, OnDestroy, SimpleChanges, NgZone } from '@angular/core';
import { LottieStatic, LottieAnimationOptions } from '../typings/lottie';

declare var lottie: LottieStatic;

@Component({
  selector: 'lottie',
  template: `
    <div #lottie [ngClass]="className"></div>
  `
})
export class LottieComponent implements OnInit, OnDestroy {
  @Input() className: string;
  @Input() name: string;
  @Input() renderer: string = 'svg';
  @Input() loop: boolean = true;
  @Input() autoplay: boolean = true;
  @Input() path: string;
  @Input() animationData: any;
  
  @ViewChild('lottie') lottieElement: ElementRef;

  protected id: number;
  private _instance: Lottie;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    if (typeof lottie === 'undefined') {
      throw new TypeError('ngx-lottie wrapper requires Lottie (https://github.com/airbnb/lottie-web)');
    }

    if(!this.path && !this.animationData) {
      throw new TypeError('ngx-lottie - Path property or AnimationData property cannot be null.');
    }

    this.id = Math.random();
    var container = this.lottieElement.nativeElement;

    const animationOptions: LottieAnimationOptions = {
      container: container,
      renderer: this.renderer,
      loop: this.loop,
      autoplay: this.autoplay
    };

    if(this.path) {
      animationOptions.path = this.path;
    } else {
      animationOptions.animationData = this.animationData;
    }

    this.zone.runOutsideAngular(() => {
      this._instance = lottie.loadAnimation(animationOptions);
    });
  }

  ngOnDestroy() {
    if (this._instance) {
      this._instance.destroy();
    }
  }
}
