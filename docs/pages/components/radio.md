---
meta:
  title: Radio
  description: Radios allow the user to select a single option from a group.
layout: component
---

## Examples

### Basic Radio

Radios are designed to be used with [radio groups](/components/radio-group).

```html:preview
<sl-radio-group label="Select an option" name="a" value="1">
  <sl-radio value="1">Option 1</sl-radio>
  <sl-radio value="2">Option 2</sl-radio>
  <sl-radio value="3">Option 3</sl-radio>
</sl-radio-group>
```

```pug:slim
sl-radio-group label="Select an option" name="a" value="1"
  sl-radio value="1" Option 1
  sl-radio value="2" Option 2
  sl-radio value="3" Option 3
```

```jsx:react
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" name="a" value="1">
    <SlRadio value="1">Option 1</SlRadio>
    <SlRadio value="2">Option 2</SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
  </SlRadioGroup>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<sl-radio-group label="Select an option" name="a" value="3">
  <sl-radio value="1">Option 1</sl-radio>
  <sl-radio value="2">Option 2</sl-radio>
  <sl-radio value="3">Option 3</sl-radio>
</sl-radio-group>
```

```pug:slim
sl-radio-group label="Select an option" name="a" value="3"
  sl-radio value="1" Option 1
  sl-radio value="2" Option 2
  sl-radio value="3" Option 3
```

```jsx:react
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" name="a" value="3">
    <SlRadio value="1">Option 1</SlRadio>
    <SlRadio value="2">Option 2</SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
  </SlRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html:preview
<sl-radio-group label="Select an option" name="a" value="1">
  <sl-radio value="1">Option 1</sl-radio>
  <sl-radio value="2" disabled>Option 2</sl-radio>
  <sl-radio value="3">Option 3</sl-radio>
</sl-radio-group>
```

```pug:slim
sl-radio-group label="Select an option" name="a" value="1"
  sl-radio value="1" Option 1
  sl-radio value="2" disabled="true" Option 2
  sl-radio value="3" Option 3
```

```jsx:react
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" name="a" value="1">
    <SlRadio value="1">Option 1</SlRadio>
    <SlRadio value="2" disabled>
      Option 2
    </SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
  </SlRadioGroup>
);
```

### Sizes

Add the `size` attribute to the [Radio Group](/components/radio-group) to change the radios' size.

```html:preview
<sl-radio-group size="small" value="1">
  <sl-radio value="1">Small 1</sl-radio>
  <sl-radio value="2">Small 2</sl-radio>
  <sl-radio value="3">Small 3</sl-radio>
</sl-radio-group>

<br />

<sl-radio-group size="medium" value="1">
  <sl-radio value="1">Medium 1</sl-radio>
  <sl-radio value="2">Medium 2</sl-radio>
  <sl-radio value="3">Medium 3</sl-radio>
</sl-radio-group>

<br />

<sl-radio-group size="large" value="1">
  <sl-radio value="1">Large 1</sl-radio>
  <sl-radio value="2">Large 2</sl-radio>
  <sl-radio value="3">Large 3</sl-radio>
</sl-radio-group>
```

```pug:slim
sl-radio size="small" Small
sl-radio size="medium" Medium
sl-radio size="large" Large
```

```jsx:react
import SlRadio from '@teamshares/shoelace/dist/react/radio';

const App = () => (
  <>
    <SlRadioGroup size="small" value="1">
      <SlRadio value="1">Small 1</SlRadio>
      <SlRadio value="2">Small 2</SlRadio>
      <SlRadio value="3">Small 3</SlRadio>
    </SlRadioGroup>

    <br />

    <SlRadioGroup size="medium" value="1">
      <SlRadio value="1">Medium 1</SlRadio>
      <SlRadio value="2">Medium 2</SlRadio>
      <SlRadio value="3">Medium 3</SlRadio>
    </SlRadioGroup>

    <br />

    <SlRadioGroup size="large" value="1">
      <SlRadio value="1">Large 1</SlRadio>
      <SlRadio value="2">Large 2</SlRadio>
      <SlRadio value="3">Large 3</SlRadio>
    </SlRadioGroup>
  </>
);
```

### Contained

Add the `contained` attribute to the [Radio Group](/components/radio-group) to draw a card-like container around each radio item in the radio group. This style is useful for giving more emphasis to the list of options.

```html:preview
<sl-radio-group label="Select an option" name="a" value="1" contained>
  <sl-radio value="1" description="A short description about this option">Option 1</sl-radio>
  <sl-radio value="2" description="A short description about this option">Option 2</sl-radio>
  <sl-radio value="3" description="A short description about this option">
    Option 3
  </sl-radio>
</sl-radio-group>
```

```pug:slim
sl-radio-group label="Select an option" name="a" value="3"
  sl-radio contained="true" value="1" Option 1
  sl-radio contained="true" disabled="true" value="2" Option 2
  sl-radio contained="true" value="3" Option 3
    div slot="description" A short description about this option
```

```jsx:react
import { SlRadio } from '@teamshares/shoelace/dist/react';

const App = () => (
  <>
    <SlRadioGroup label="Select an option" name="a" value="3">
      <SlRadio contained value="1">
        Option 1
      </SlRadio>
      <SlRadio contained value="2" disabled>
        Option 2
      </SlRadio>
      <SlRadio contained value="3">
        Option 3<div slot="description">A short description about this option</div>
      </SlRadio>
    </SlRadioGroup>
  </>
);
```

### Selected Content

Use the `selected-content` slot to display additional content (such as an input field) inside a `contained` radio when the radio is selected (checked).

```html:preview
<sl-radio-group label="Select your payment amount" name="a" value="1" contained>
  <sl-radio value="1" description="$10.00">Last statement balance
    <div slot="selected-content" class="balance-info">This is the amount you owe as of your Feb 21 statement</div>
  </sl-radio>
  <sl-radio value="2" description="$150.00">Current balance
    <div slot="selected-content" class="balance-info">This is the amount you owe as of today</div>
  </sl-radio>
  <sl-radio value="3">
    Custom amount
    <sl-input style="width: 240px;" slot="selected-content" label="Amount" type="currency">
  </sl-radio>
</sl-radio-group>

<style>
  .balance-info {
    font-size: 14px;
    font-weight: normal;
    color: #6D7176;
  }
</style>
```

```pug:slim
sl-radio-group label="Select an option" name="a" value="3"
  sl-radio contained="true" value="1" Option 1
  sl-radio contained="true" disabled="true" value="2" Option 2
  sl-radio contained="true" value="3" Option 3
    div slot="description" A short description about this option
```

```jsx:react
import { SlRadio } from '@teamshares/shoelace/dist/react';

const App = () => (
  <>
    <SlRadioGroup label="Select an option" name="a" value="3">
      <SlRadio contained value="1">
        Option 1
      </SlRadio>
      <SlRadio contained value="2" disabled>
        Option 2
      </SlRadio>
      <SlRadio contained value="3">
        Option 3<div slot="description">A short description about this option</div>
      </SlRadio>
    </SlRadioGroup>
  </>
);
```
