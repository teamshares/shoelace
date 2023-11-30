---
meta:
  title: Breadcrumb Item
  description: Breadcrumb Items are used inside breadcrumbs to represent different links.
layout: component
---

## Examples

### Basic Breadcrumb Item

```html:preview
<sl-breadcrumb>
  <sl-breadcrumb-item>
    <sl-icon slot="prefix" name="home"></sl-icon>
    Home
  </sl-breadcrumb-item>
  <sl-breadcrumb-item>Clothing</sl-breadcrumb-item>
  <sl-breadcrumb-item>Shirts</sl-breadcrumb-item>
</sl-breadcrumb>
```

```pug:slim
sl-breadcrumb
  sl-breadcrumb-item
    sl-icon slot="prefix" name="home"
    | Home
  sl-breadcrumb-item Clothing
  sl-breadcrumb-item Shirts
```

```jsx:react
import SlBreadcrumb from '@teamshares/shoelace/dist/react/breadcrumb';
import SlBreadcrumbItem from '@teamshares/shoelace/dist/react/breadcrumb-item';
import SlIcon from '@teamshares/shoelace/dist/react/icon';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>
      <SlIcon slot="prefix" name="home"></SlIcon>
      Home
    </SlBreadcrumbItem>
    <SlBreadcrumbItem>Clothing</SlBreadcrumbItem>
    <SlBreadcrumbItem>Shirts</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

:::tip
Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).
:::
