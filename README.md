# Sargam Icons for React

A collection of open-source icons crafted to match your exquisite designs.

Part of [sargamicons.com](https://sargamicons.com/) ♪♪♪ ヽ(ˇ∀ˇ )ゞ

## Features

- **Tree-shakeable**: Modular imports ensure you only bundle what you use.
- **TypeScript**: Full type definitions included.
- **Accessibility**: Built-in support for titles and ARIA attributes.
- **Optimization**: Wrapped in `React.memo` for performance.
- **Theming**: Uses `currentColor` for easy CSS styling.

## Installation

```bash
npm install @sargamdesign/icons-react
# or
yarn add @sargamdesign/icons-react
# or
bun add @sargamdesign/icons-react
```

## Usage

Import icons from their specific style paths (preferred) or the main package.

**Note**: All icon components are prefixed with `Si` (e.g., `SiStar`, `SiHome`).

### Style Imports (Recommended)

```jsx
import { SiStar } from '@sargamdesign/icons-react/line';
import { SiHeart } from '@sargamdesign/icons-react/duotone';
import { SiHome } from '@sargamdesign/icons-react/fill';

function App() {
  return (
    <div style={{ fontSize: '24px', color: '#555' }}>
      <SiStar />
      <SiHeart />
      <SiHome />
    </div>
  );
}
```

### Namespace Imports

```jsx
import * as Icons from '@sargamdesign/icons-react';

function App() {
  return <Icons.Line.SiStar />;
}
```

## Customization

Icons inherit `fontSize` and `color` (via `currentColor`) from their parent. You can also pass props directly.

```jsx
// Inherit styles (2em red icon)
<div style={{ fontSize: '2em', color: 'red' }}>
  <SiStar />
</div>

// Direct props
<SiStar 
  width={32} 
  height={32}
  color="#3b82f6"
  className="my-icon" 
  style={{ margin: '8px' }}
/>
```

## Accessibility

- **Semantic**: Add a `title` prop. The icon will render a `<title>` tag and use `aria-labelledby`.
  ```jsx
  <SiStar title="Add to favorites" />
  ```
- **Decorative**: Omit the `title`. The icon will have `aria-hidden="true"`.
  ```jsx
  <SiStar /> 
  ```

## TypeScript

All components are fully typed with `IconProps`.

```typescript
import { SiStar, IconProps } from '@sargamdesign/icons-react/line';

const MyButton = ({ icon: Icon }: { icon: React.FC<IconProps> }) => (
  <button><Icon /></button>
);
```

### Ref Forwarding

Access the underlying SVG element using standard refs.

```jsx
const iconRef = useRef<SVGSVGElement>(null);
return <SiStar ref={iconRef} />;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Accessible title. If omitted, icon is hidden from screen readers. |
| `width` | `number \| string` | `1em` | Icon width. |
| `height` | `number \| string` | `1em` | Icon height. |
| `color` | `string` | `currentColor` | Icon fill/stroke color. |
| `...props`| `SVGProps` | - | All standard SVG attributes (onClick, style, etc.) |
