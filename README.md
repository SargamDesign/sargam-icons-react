# Sargam icons for React.js 
Part of [sargamicons.com](https://sargamicons.com/) ∠( ᐛ 」∠)_

### Install
```bash
npm i @sargamdesign/icons-react
```

### Usage
- ESM (Vite/Next.js/Node ESM)
```js
import { Star } from '@sargamdesign/icons-react/line';
import { Heart } from '@sargamdesign/icons-react/duotone';
import { Home } from '@sargamdesign/icons-react/fill';
```

- CJS
```js
const { Star } = require('@sargamdesign/icons-react/line');
```

### Accessibility
- Pass `title` for screen readers: `<Star title="Favorites" />`
- If no `title`, add `aria-hidden` to hide from AT: `<Star aria-hidden />`
