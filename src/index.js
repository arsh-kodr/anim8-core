// src/index.js

import { animate } from "./core/animate.js";
import { resolveElement } from "./utils/resolveElement.js";

// Effects
import { fadeIn } from "./effects/fade.js";
import { slideIn } from "./effects/slide.js";
import { rotate } from "./effects/rotate.js";
import { rotateScale } from "./effects/rotateScale.js";
import { scrollReveal } from "./effects/scrollReveal.js";
import { typewriterPulse } from "./effects/typewriterPulse.js";
import { gooeyNav } from "./effects/gooeyNav.js";
import { slideOut } from "./effects/slideOut.js";
import { depthZoom } from "./effects/depthZoom.js";
import { stagger } from "./effects/stagger.js";
import { blurIn } from "./effects/blurIn.js";
import { scrollTrigger } from "./utils/scrollTrigger.js";

// ✅ Named exports for modern JS users
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
  animate,
  resolveElement,
};

// ✅ Default export for UMD build (global `anim8`)
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
  animate,
  resolveElement,
};

// ✅ Attach to window for CDN usage (`<script src=".../anim8.umd.js"></script>`)
if (typeof window !== "undefined") {
  window.anim8 = {
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
    animate,
    resolveElement,
  };
}
