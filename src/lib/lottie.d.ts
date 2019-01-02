export enum LottieDirection {
    Forward = 1,
    Reverse = -1
}

export interface LottieRendererSettings {
    context: CanvasRenderingContext2D;
    scaleMode?: string;
    clearCanvas?: boolean;
    progressiveLoad?: boolean;
    hideOnTransparent?: boolean;
    className?: string;
    preserveAspectRatio?: string;
}

export interface LottieAnimationOptions {
    container: HTMLElement;
    renderer: string;
    loop?: boolean;
    autoplay?: boolean;
    animationData?: any;
    path?: string;
    assetsPath?: string;
    rendererSettings?: LottieRendererSettings;
}

export interface Lottie {
    play(): void;
    stop(): void;
    pause(): void;
    setLocationHref(href: string): void;
    setSpeed(speed: number): void;
    goToAndStop(value: number, isFrame?: boolean): void;
    goToAndPlay(value: number, isFrame?: boolean): void;
    setDirection(direction: LottieDirection): void;
    playSegments(segments: [], forceFlag: boolean): void;
    setSubframe(useSubFrames: boolean): void
    getDuration(inFrames: boolean): number;
    destroy(): void;
}

export interface LottieStatic {
    play(animationName: string): void;
    stop(animationName: string): void;
    setSpeed(speed: number, animationName: string): void;
    setDirection(direction: LottieDirection, animationName: string): void;
    searchAnimations(): Array<Lottie>;
    loadAnimation(options: LottieAnimationOptions): Lottie;
    destroy(): void;
    registerAnimation(): void;
    setQuality(quality: string | number): void;
}

declare var lottie: LottieStatic;