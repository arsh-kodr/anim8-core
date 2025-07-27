
# 🎞️ anim8-core

> A lightweight JavaScript animation library with built-in effects like `fadeIn`, `slideIn`, `rotate`, `scrollReveal`, `gooeyNav`, `typewriterPulse`, and more.

🔧 Built for simplicity, no dependencies — just plug & animate.

---

## 🚀 Installation

### 📦 NPM (For bundlers like Vite, Webpack, etc.)

```bash
npm install anim8-core
```

```js
// ESM Import
import * as anim8 from 'anim8-core';

// Usage
anim8.fadeIn(document.querySelector('.box'), {
  duration: 800,
  easing: 'easeOutQuad',
});
```
---

### 🌐 CDN (Browser UMD)

```html
<!-- Add script via unpkg CDN -->
<script src="https://unpkg.com/anim8-core/dist/anim8.umd.js"></script>

<div class="box">Hello Animation</div>

<script>
  // Use window.anim8Core in the browser
  window.anim8Core.fadeIn(document.querySelector('.box'), {
    duration: 800,
    easing: 'easeOutQuad',
  });
</script>
```

---

## ✨ Animations Available

| Function               | Description                              |
|------------------------|------------------------------------------|
| `fadeIn(el)`           | Smooth fade-in effect                    |
| `slideIn(el, dir)`     | Slide in from `left`, `right`, etc.      |
| `slideOut(el)`         | Slide out effect                         |
| `rotate(el)`           | Rotate element                           |
| `rotateScale(el)`      | Rotate + scale                           |
| `depthZoom(el)`        | Zoom with depth illusion                 |
| `blurIn(el)`           | Blur-in reveal                           |
| `scrollReveal(el)`     | Animate when element enters viewport     |
| `scrollTrigger(el)`    | Scroll-based trigger                     |
| `gooeyNav(el)`         | Gooey effect for navigation              |
| `typewriterPulse(el)`  | Typewriter + pulse effect                |
| `stagger(el)`          | Stagger animations                       |

---

## 🚀 Quick Start

Import only the animations you need for optimal bundle size:

```javascript
import { fadeIn, slideIn, rotate } from 'anim8-core';

// Get your element
const element = document.querySelector('.my-element');

// Fade in with custom options
fadeIn(element, {
  duration: 800,
  delay: 200,
  easing: 'easeOutExpo'
});

// Slide in from the left
slideIn(element, {
  direction: 'left',
  duration: 600,
  distance: '100px'
});

// Rotate continuously
rotate(element, {
  speed: 2,
  duration: 3000
});
```

---

## ⚙️ Configuration Options

Most animations accept these common parameters:

```javascript
{
  duration: 1000,        // Animation duration in milliseconds
  delay: 0,              // Delay before animation starts
  easing: 'easeOutQuad', // Easing function name
  direction: 'top',      // Direction for slide animations
  onComplete: () => {}   // Callback function when animation ends
}
```

### Available Easing Functions
- `linear`
- `easeInQuad`, `easeOutQuad`, `easeInOutQuad`
- `easeInCubic`, `easeOutCubic`, `easeInOutCubic`
- `easeInExpo`, `easeOutExpo`, `easeInOutExpo`
- `easeInBounce`, `easeOutBounce`, `easeInOutBounce`

---

## 🏗️ Project Structure

```
anim8-core/
├── src/
│   ├── core/           # Core animation utilities
│   ├── easings/        # Easing function library
│   └── effects/        # Individual animation effects
├── tests/              # Jest unit tests
├── dist/               # Production builds
├── index.js            # Main entry point
├── package.json
├── vite.config.js      # Development server config
├── jest.config.cjs     # Testing configuration
└── babel.config.json   # Babel preset configuration
```

---

## 🔧 Creating Custom Effects

Extend the library with your own animations:

1. **Create your effect file** `src/effects/myCustomEffect.js`:
```javascript
export default function myCustomEffect(element, options = {}) {
  const { duration = 1000, easing = 'easeOutQuad' } = options;

  // Your custom animation logic here
  // Use requestAnimationFrame for smooth performance
}
```

2. **Export in main index.js**:
```javascript
export { default as myCustomEffect } from './src/effects/myCustomEffect';
```

3. **Use your custom effect**:
```javascript
import { myCustomEffect } from 'anim8-core';
myCustomEffect(element, { duration: 800 });
```

---

## 🧪 Testing

The project uses Jest with JSDOM for comprehensive DOM testing.

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage report
npm run test:coverage
```

### Example Test
```javascript
import { fadeIn } from '../src/effects/fade.js';

test('fadeIn animation sets opacity to 1', () => {
  const element = document.createElement('div');
  document.body.appendChild(element);

  fadeIn(element, { duration: 0 });

  expect(element.style.opacity).toBe('1');
});
```

---

## 🌐 Browser Support

| Browser          | Support |
|------------------|---------|
| Chrome           | ✅ Latest |
| Firefox          | ✅ Latest |
| Safari           | ✅ Latest |
| Edge             | ✅ Latest |
| Opera            | ✅ Latest |
| Android Browser  | ✅ Latest |
| iOS Safari       | ✅ Latest |

*Uses modern APIs like `requestAnimationFrame` for optimal performance*

---

## 🚀 Development & Build

### Local Development
```bash
# Start development server
npm run dev

# Preview production build
npm run preview
```

### Building for Production
```bash
# Create production build
npm run build

# Test the build
npm run preview
```

---

## 📄 API Reference

### fadeIn(element, options)
Fades an element from transparent to opaque.

**Parameters:**
- `element` (HTMLElement) - Target element
- `options` (Object) - Configuration options
  - `duration` (number) - Animation duration (default: 1000ms)
  - `delay` (number) - Start delay (default: 0ms)
  - `easing` (string) - Easing function (default: 'easeOutQuad')

### slideIn(element, options)
Slides an element into view from a specified direction.

**Parameters:**
- `element` (HTMLElement) - Target element
- `options` (Object) - Configuration options
  - `direction` (string) - Slide direction: 'top', 'bottom', 'left', 'right'
  - `duration` (number) - Animation duration (default: 1000ms)
  - `distance` (string) - Slide distance (default: '100px')

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙋‍♂️ Support

- 📧 Email: [arshrai2364@gmail.com](mailto:arshrai2364@gmail.com)
- 🐛 Issues: [GitHub Issues](https://github.com/arsh-kodr/anim8-core/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/arsh-kodr/anim8-core/discussions)

---

## 🌟 Show Your Support

If anim8-core helped you build something awesome, please ⭐ star the repository!

---

**Made with ❤️ by [Arsh Rai](https://github.com/arsh-kodr)**
