# Sargam Icons for React

A collection of open-source icons crafted to match your exquisite designs.

Part of [sargamicons.com](https://sargamicons.com/)

## Features

- Tree-shakeable - only import what you use.
- TypeScript support with full type definitions.
- Accessibility features built-in.
- React.memo and ref forwarding included.
- Customizable with standard CSS.

## Installation

```bash
npm install @sargamdesign/icons-react
```

or with yarn:

```bash
yarn add @sargamdesign/icons-react
```

or with bun:

```bash
bun add @sargamdesign/icons-react
```

## Usage

### Basic Usage

Import icons from their respective style directories:

```jsx
import { Star } from '@sargamdesign/icons-react/line';
import { Heart } from '@sargamdesign/icons-react/duotone';
import { Home } from '@sargamdesign/icons-react/fill';

function App() {
  return (
    <div>
      <Star />
      <Heart />
      <Home />
    </div>
  );
}
```

### CommonJS

```javascript
const { Star } = require('@sargamdesign/icons-react/line');
```

### Namespace Import

```jsx
import * as Icons from '@sargamdesign/icons-react';

function App() {
  return (
    <div>
      <Icons.Line.Star />
      <Icons.Duotone.Heart />
      <Icons.Fill.Home />
    </div>
  );
}
```

## Props

All icons accept standard SVG attributes as props plus an optional `title` for accessibility:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Accessible title for screen readers |
| `className` | `string` | `undefined` | CSS class name |
| `style` | `CSSProperties` | `undefined` | Inline styles |
| `width` | `string \| number` | `"1em"` | Icon width |
| `height` | `string \| number` | `"1em"` | Icon height |
| `color` | `string` | `"currentColor"` | Icon color (via stroke/fill) |
| `onClick` | `function` | `undefined` | Click handler |
| `ref` | `Ref<SVGSVGElement>` | `undefined` | React ref to SVG element |
| ...rest | `SVGProps<SVGSVGElement>` | - | All other SVG attributes |

## Customization

### Sizing

Icons default to `1em` which inherits the font size:

```jsx
// 24px icon (inherits font-size)
<div style={{ fontSize: '24px' }}>
  <Star />
</div>

// Or set width/height directly
<Star width={32} height={32} />
<Star width="2rem" height="2rem" />
```

### Colors

Icons use `currentColor` by default, inheriting text color:

```jsx
// Inherits color from parent
<div style={{ color: 'red' }}>
  <Star />
</div>

// Set color directly via className
<Star className="text-blue-500" />

// Or inline style
<Star style={{ color: '#3b82f6' }} />
```

### Custom Styling

```jsx
import { Star } from '@sargamdesign/icons-react/line';

function App() {
  return (
    <Star 
      className="my-icon"
      style={{ 
        width: '40px',
        height: '40px',
        color: '#f59e0b',
        cursor: 'pointer'
      }}
      onClick={() => console.log('clicked!')}
    />
  );
}
```

## TypeScript

Full TypeScript support with auto-completion:

```typescript
import { Star, IconProps } from '@sargamdesign/icons-react/line';
import type { FC } from 'react';

// Use the exported IconProps type
const CustomIcon: FC<IconProps> = (props) => {
  return <Star {...props} />;
};

// Or inline
const IconButton: FC<{ icon: FC<IconProps> }> = ({ icon: Icon }) => {
  return <button><Icon title="Click me" /></button>;
};
```

### Using with Refs

```typescript
import { useRef, useEffect } from 'react';
import { Star } from '@sargamdesign/icons-react/line';

function App() {
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      const bbox = iconRef.current.getBoundingClientRect();
      console.log('Icon dimensions:', bbox.width, bbox.height);
    }
  }, []);

  return <Star ref={iconRef} />;
}
```

## Accessibility

### With Title (Semantic Icon)

When an icon conveys meaning, provide a `title`:

```jsx
<Star title="Favorite" />
// Renders: <svg aria-labelledby="title-id"><title>Favorite</title>...</svg>
```

### Decorative Icon

When an icon is purely decorative, it's automatically hidden from screen readers:

```jsx
<Star />
// Renders: <svg aria-hidden="true">...</svg>
```

### In Buttons

```jsx
<button>
  <Star title="Add to favorites" />
</button>

// Or with visible text
<button>
  <Star aria-hidden />
  Add to favorites
</button>
```

## Icon Styles

### Line
Outlined stroke-based icons for a clean, minimal look.
```jsx
import { Star } from '@sargamdesign/icons-react/line';
```

### Duotone
Two-tone icons with primary and secondary elements.
```jsx
import { Star } from '@sargamdesign/icons-react/duotone';
```

### Fill
Solid filled icons for bold emphasis.
```jsx
import { Star } from '@sargamdesign/icons-react/fill';
```
