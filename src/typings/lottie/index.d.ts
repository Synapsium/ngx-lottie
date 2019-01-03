
declare class Lottie {
    play(): void;
    stop(): void;
    pause(): void;
    setLocationHref(href: string): void;
    setSpeed(speed: number): void;
    goToAndStop(value: number, isFrame?: boolean): void;
    goToAndPlay(value: number, isFrame?: boolean): void;
    setDirection(direction: Lottie.LottieDirection): void;
    playSegments(segments: [], forceFlag: boolean): void;
    setSubframe(useSubFrames: boolean): void
    getDuration(inFrames: boolean): number;
    destroy(): void;
}

declare namespace Lottie {

    interface LottieStatic {
        play(animationName: string): void;
        stop(animationName: string): void;
        setSpeed(speed: number, animationName: string): void;
        setDirection(direction: Lottie.LottieDirection, animationName: string): void;
        searchAnimations(): Array<Lottie>;
        loadAnimation(options: Lottie.LottieAnimationOptions): Lottie;
        destroy(): void;
        registerAnimation(): void;
        setQuality(quality: string | number): void;
    }

    enum LottieDirection {
        Forward = 1,
        Reverse = -1
    }

    interface LottieRendererSettings {
        context: CanvasRenderingContext2D;
        scaleMode?: string;
        clearCanvas?: boolean;
        progressiveLoad?: boolean;
        hideOnTransparent?: boolean;
        className?: string;
        preserveAspectRatio?: string;
    }
    
    interface LottieAnimationOptions {
        container: HTMLElement;
        renderer: string;
        loop?: boolean;
        autoplay?: boolean;
        animationData?: any;
        path?: string;
        assetsPath?: string;
        rendererSettings?: LottieRendererSettings;
    }
}

export = Lottie;
export as namespace Lottie;