<p align="center">
  <img height="200px" width="200px"  src="http://airbnb.io/lottie/images/Introduction_00_sm.gif">
  <a href="https://synapsium.com">
    <h1 align="center">ngx-lottie</h1>
  </a>
</p>

<p align="center">
Quickly way to integrate <a href="http://airbnb.io/lottie/">Lottie-web</a> component with <a href="https://angular.io/">Angular</a>
</p>

# Lottie

Lottie is a mobile library for Web, and iOS that parses Adobe After Effects animations exported as json with Bodymovin and renders them natively on mobile!
View documentation, FAQ, help, examples, and more at <a href="http://airbnb.io/lottie/">here</a>.

## Setup

### Installation

Install `lottie-web` and `ngx-lottie` library from `npm`

```bash
npm install lottie-web @synapsium/ngx-lottie --save
```

### Module usage

Add `LottieModule` to module

```javascript
import { LottieModule } from '@synapsium/ngx-lottie';


@NgModule({
  ...
  imports: [
    ...
    LottieModule
  ]
})
```

## How to use

Add the following tag in your html :
```html
<lottie className="container-class" 
         [path]="path">
</lottie>
```

