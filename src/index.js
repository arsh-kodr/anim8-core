
import { animate } from "./core/animate.js";
import { resolveElement } from "./utils/resolveElement.js";

// now they get included in the UMD bundle too

// Effect Imports

import { fadeIn } from "./effects/fade.js";
import { slideIn } from "./effects/slide.js";
import { rotate } from "./effects/rotate.js";
import { rotateScale } from "./effects/rotateScale.js";
import { scrollReveal } from "./effects/scrollReveal.js";
import { typewriterPulse } from "./effects/typewriterPulse.js";
import { gooeyNav } from "./effects/gooeyNav.js";
import { slideOut } from "./effects/slideOut.js";
import { depthZoom } from './effects/depthZoom.js';
import { stagger } from './effects/stagger.js';
import { blurIn } from './effects/blurIn.js';
import { scrollTrigger } from "./utils/scrollTrigger.js";

// ✅ Named exports (for ESM/CommonJS users)
export {
  fadeIn,
  slideIn,
  rotate,
  rotateScale,
  scrollReveal,
  typewriterPulse,
  gooeyNav,
  slideOut,
  depthZoom,
  stagger,
  blurIn,
  scrollTrigger,
};

// ✅ Default export for UMD users (global `anim8` object in <script>)
export default {
  fadeIn,
  slideIn,
  rotate,
  rotateScale,
  scrollReveal,
  typewriterPulse,
  gooeyNav,
  slideOut,
  depthZoom,
  stagger,
  blurIn,
  scrollTrigger,
};

// At the end of src/index.js
if (typeof window !== 'undefined') {
  window.anim8Core = {
    fadeIn,
    slideIn,
    rotate,
    rotateScale,
    scrollReveal,
    typewriterPulse,
    gooeyNav,
    slideOut,
    depthZoom,
    stagger,
    blurIn,
    scrollTrigger,
  };
}
