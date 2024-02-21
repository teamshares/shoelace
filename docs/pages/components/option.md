---
meta:
  title: Option
  description: Options define the selectable items within various form controls such as select.
layout: component
---

## Examples

### Basic Options

```html:preview
<sl-select label="Select an option">
  <sl-option value=""></sl-option>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-select>
```

```pug:slim
sl-select label="Select an option"
  sl-option value=""
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Disabled

Use the `disabled` attribute to disable an option and prevent it from being selected.

```html:preview
<sl-select label="Select an option">
  <sl-option value=""></sl-option>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2" disabled>Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-select>
```

```pug:slim
sl-select label="Select an option"
  sl-option vaue=""
  sl-option value="option-1" Option 1
  sl-option value="option-2" disabled="true" Option 2
  sl-option value="option-3" Option 3
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2" disabled>
      Option 2
    </SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Prefix & Suffix Icons

Add icons to the start and end of options using the `prefix` and `suffix` slots.

Follow these general guidelines when adding prefix and suffix icons to option items:

- Use the `sl-icon` component
- Use `library="fa"` (our default Font Awesome icon set)
- Use the `Light` icon style, which means you **need to add a `fal-` prefix** to the icon name
  - See [icons sets](/components/icon/#icon-sets) for more about Font Awesome icon styles
- In general **don't** resize icons or change their color from the default already set by the `sl-option` component

:::warning
**Note:** If you find your use case requires a different size or color from the default, bring it up to the Design Team so that we can consider whether the pattern needs to be updated.
:::

```html:preview
<sl-select label="Icon examples: DO" help-text="Prefix and suffix icons in this options panel are using the `fal-` prefix">
  <sl-option value=""></sl-option>
  <sl-option value="option-1">
    <sl-icon slot="prefix" library="fa" name="fal-envelope"></sl-icon>
    Email
    <sl-icon slot="suffix" library="fa" name="fal-badge-check"></sl-icon>
  </sl-option>

  <sl-option value="option-2">
    <sl-icon slot="prefix" library="fa" name="fal-phone"></sl-icon>
    Phone
    <sl-icon slot="suffix" library="fa" name="fal-badge-check"></sl-icon>
  </sl-option>

  <sl-option value="option-3">
    <sl-icon slot="prefix" library="fa" name="fal-comment-dots"></sl-icon>
    Chat
    <sl-icon slot="suffix" library="fa" name="fal-badge-check"></sl-icon>
  </sl-option>
</sl-select>
<br />
<sl-select label="Icon examples: DON'T" help-text="Prefix and suffix icons in this options panel are using the `fad-` and '-fas` prefixes and overriding the default color and size for options icons">
  <sl-option value=""></sl-option>
  <sl-option value="option-1">
    <sl-icon slot="prefix" library="fa" name="fad-envelope" style="font-size: 1.25rem; color:mediumpurple;"></sl-icon>
    Email
    <sl-icon slot="suffix" library="fa" name="fas-badge-check" style="font-size: 1.25rem; color:mediumpurple;"></sl-icon>
  </sl-option>

  <sl-option value="option-2">
    <sl-icon slot="prefix" library="fa" name="fad-phone" style="font-size: 1.25rem; color:mediumpurple;"></sl-icon>
    Phone
    <sl-icon slot="suffix" library="fa" name="fas-badge-check" style="font-size: 1.25rem; color:mediumpurple;"></sl-icon>
  </sl-option>

  <sl-option value="option-3">
    <sl-icon slot="prefix" library="fa" name="fad-comment-dots" style="font-size: 1.25rem; color:mediumpurple;"></sl-icon>
    Chat
    <sl-icon slot="suffix" library="fa" name="fas-badge-check" style="font-size: 1.25rem; color:mediumpurple;"></sl-icon>
  </sl-option>
</sl-select>
```

```pug:slim
sl-select label="Icon examples: DO" help-text="Prefix and suffix icons in this options panel are using the `fal-` prefix"
  sl-option value=""
  sl-option value="option-1"
    sl-icon slot="prefix" name="fal-envelope"
    | Email
    sl-icon slot="suffix" name="fal-badge-check"
  sl-option value="option-2"
    sl-icon slot="prefix" name="fal-phone"
    | Phone
    sl-icon slot="suffix" name="fal-badge-check"
  sl-option value="option-3"
    sl-icon slot="prefix" name="fal-comment-dots"
    | Chat
    sl-icon slot="suffix" name="fal-badge-check"
br
sl-select label="Icon examples: DON'T" help-text="Prefix and suffix icons in this options panel are using the `fad-` and '-fas` prefixes and overriding the default color and size for options icons"
  sl-option value=""
  sl-option value="option-1"
    sl-icon slot="prefix" name="fad-envelope" style="font-size: 1.25rem; color:mediumpurple;"
    | Email
    sl-icon slot="suffix" name="fas-badge-check" style="font-size: 1.25rem; color:mediumpurple;"
  sl-option value="option-2"
    sl-icon slot="prefix" name="fad-phone" style="font-size: 1.25rem; color:mediumpurple;"
    | Phone
    sl-icon slot="suffix" name="fas-badge-check" style="font-size: 1.25rem; color:mediumpurple;"
  sl-option value="option-3"
    sl-icon slot="prefix" name="fad-comment-dots" style="font-size: 1.25rem; color:mediumpurple;"
    | Chat
    sl-icon slot="suffix" name="fas-badge-check" style="font-size: 1.25rem; color:mediumpurple;"
```
