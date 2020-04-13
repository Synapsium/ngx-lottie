import { Component, Inject, Optional, ViewChild, ElementRef, Input, Output, OnInit, AfterViewInit, OnChanges, OnDestroy, SimpleChanges, NgZone } from '@angular/core';
import Lottie, { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web';

@Component({
  selector: 'lottie',
  styleUrls: ['./lottie.component.scss'],
  template: `
    <div #lottie></div>
  `
})
export class LottieComponent implements OnInit, OnDestroy {
  @Input() animationEvent: 'hover' | 'click';
  @Input() renderer: 'svg' | 'canvas' | 'html' = 'svg';
  @Input() loop: boolean;
  @Input() path: string;
  @Input() animationData: any;
  
  @ViewChild('lottie', {static: true}) lottieElement: ElementRef;

  protected id: number;
  private _instance: any;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    if (typeof Lottie === 'undefined') {
      throw new TypeError('ngx-lottie wrapper requires Lottie (https://github.com/airbnb/lottie-web)');
    }

    if(!this.path && !this.animationData) {
      throw new TypeError('ngx-lottie - Path property or AnimationData property cannot be null.');
    }

    this.id = Math.random();
    var container = this.lottieElement.nativeElement;

    const animationOptions: any = {
      container: container,
      renderer: this.renderer,
      loop: this.loop,
      autoplay: !this.animationEvent
    };

    if(this.path) {
      animationOptions.path = this.path;
    } else {
      animationOptions.animationData = this.animationData;
    }

    this.zone.runOutsideAngular(() => {
      this._instance = Lottie.loadAnimation(animationOptions);

      switch(this.animationEvent){
        case 'click' :
          this.lottieElement.nativeElement.addEventListener('mousedown', () => { this.playAnimation() });
          this.lottieElement.nativeElement.addEventListener('touchstart', () => { this.playAnimation() });
          break;
        case 'hover' :
          this.lottieElement.nativeElement.addEventListener('mouseenter', () => { this.playAnimation() });
          break;
        default:
          break;
      }
    });
  }

  playAnimation(){
    this._instance.goToAndPlay(0);
  }

  ngOnDestroy() {
    if (this._instance) {
      this._instance.destroy();
    }
  }
}
