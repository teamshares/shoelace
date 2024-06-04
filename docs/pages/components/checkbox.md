---
meta:
  title: Checkbox
  description: Checkboxes allow the user to toggle an option on or off.
layout: component
unusedProperties: |
  - Sizes `small`, `large`
  - Boolean `indeterminate`
guidelines: |
  - Refer to the [Checkbox Group component general guidelines](/components/checkbox-group/#usage-guidelines)
---

## Examples

### Basic Checkbox

```html:preview
<sl-checkbox>Financial products access</sl-checkbox>
```

```pug:slim
sl-checkbox Financial products access

/*
  When rendering with ts_form_for
*/

= ts_form_for ... do |f|
  = f.input :access,
    as: :boolean,
    input_html: {
      label: "Financial products access"
    }
```

```jsx:react
import SlCheckbox from '@teamshares/shoelace/dist/react/checkbox';

const App = () => <SlCheckbox>Checkbox</SlCheckbox>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

### Description

Add descriptive help text to individual checkbox items with the `description` attribute. For descriptions that contain HTML, use the `description` slot instead.

```html:preview
<sl-checkbox description="Grants access to cash account and charge card features">Financial products access</sl-checkbox>
```

```pug:slim
sl-checkbox description="Grants access to cash account and charge card features" Financial products access

/*
  When rendering with ts_form_for
*/

= ts_form_for ... do |f|
  = f.input :access,
    as: :boolean,
    input_html: {
      label: "Financial products access",
      description: "Grants access to cash account and charge card features",
    }
```

```jsx:react
import SlCheckbox from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => <SlCheckbox help-text="What should the user know about the switch?">Label</SlCheckbox>;
```

### Contained

Add the `contained` attribute to draw a card-like container around a checkbox. Add to a [Checkbox Group](/components/checkbox-group) to draw a container around each checkbox in the group. This style is useful for giving more emphasis to a checkbox or list of checkboxes.

```html:preview
<sl-checkbox description="Grants access to cash account and charge card features" contained>Financial products access</sl-checkbox>
<br/>
<br/>
<sl-checkbox-group label="Financial products permissions" contained>
  <sl-checkbox description="Requires separate initiators and approvers">Initiate outbound transfers</sl-checkbox>
  <sl-checkbox description="Requires separate initiators and approvers">Approve outbound transfers </sl-checkbox>
  <sl-checkbox description="Applies to both cash account and charge card" disabled>Export transactions</sl-checkbox>
</sl-checkbox-group>
```

```pug:slim
sl-checkbox[
  description="Grants access to cash account and charge card features"
  contained="true"
]
  | Financial products access
br
br
sl-checkbox-group[
  label="Financial products permissions"
  contained="true"
]
  sl-checkbox description="Requires separate initiators and approvers"
  | Initiate outbound transfers
  sl-checkbox description="Requires separate initiators and approvers"
  | Approve outbound transfers
  sl-checkbox description="Applies to both cash account and charge card" disabled
  | Export transactions

/*
  When rendering `sl-checkbox-group` with ts_form_for, pass additional
  attributes such as `disabled` and `description` as extra items
  in the collection array after the label and value.
  By default Simple Form will use the first item
  as the label and the second item as the value, then pass
  any additional array items as attributes on the `sl-checkbox`.
*/

= ts_form_for ... do |f|
  = f.input :access,
    as: :boolean,
    input_html: {
      label: "Financial products access",
      description: "Grants access to cash account and charge card features",
    }
  br
  br
  = f.input :access_options,
    as: :check_boxes,
    label: "Financial products permissions",
    collection: [
      [
        "Initiate outbound transfers",
        "initiate_outboard",
        description: "Requires separate initiators and approvers",
      ],
      [
        "Approve outbound transfers",
        "approve_outbound",
        description: "Requires separate initiators and approvers",
      ],
      [
        "Export transactions",
        "export",
        description: "Applies to both cash account and charge card",
        disabled: true,
      ],
    ],
    wrapper_html: {
      contained: true,
    }
```

```jsx:react
import { SlCheckbox } from '@teamshares/shoelace/dist/react';
const App = () => (
  <>
    <SlCheckbox contained style="width: 100%;">
      Checked
    </SlCheckbox>
    <SlCheckbox contained disabled style="width: 100%;">
      Disabled
    </SlCheckbox>
    <SlCheckbox contained checked style="width: 100%;">
      Checked
      <div slot="help-text">A short description about this option</div>
    </SlCheckbox>
  </>
);
```

:::tip
When checkboxes are wrapped with [Checkbox Group](/components/checkbox-group), adding the `contained` attribute to the parent Checkbox Group or to _any_ checkbox in the group will create `contained` checkboxes for the entire group.
:::

### Selected Content

Use the `selected-content` slot to display additional content (such as an input field) inside a `contained` checkbox when it is checked. The slot is unstyled by default. Use `::part(selected-content)` to style the content as needed.

:::warning
**Note:** `ts_form_for` doesn't support slots. The `selected-content` slot cannot be used for checkboxes rendered with `ts_form_for`.
:::

```html:preview
<sl-checkbox style="width:100%" contained>Grant financial products access
  <div slot="selected-content">
    <p>A mobile number is required to grant this user access to financial products. The number will be used for login verification.</p>
    <sl-input style="width: 280px;" label="Mobile number" type="tel" required optional-icon></div>
</sl-checkbox>
<style>
  sl-checkbox::part(selected-content) {
    font-size: 14px;
    font-weight: normal;
    color: #6D7176;
  }
</style>
```

```pug:slim
/*
  NOTE: `ts_form_for` doesn't support slots. The `selected-content` slot
  cannot be used for checkboxes rendered with `ts_form_for`.
*/

sl-checkbox[
  style="width:100%"
  contained="true"
]
  | Grant financial products access
  div slot="selected-content"
    p A mobile number is required to grant this user access to financial products. The number will be used for login verification.
    sl-input[
      style="width: 280px;"
      label="Mobile number"
      type="tel"
      required="true"
      optional-icon="true"
    ]
css:
    sl-checkbox::part(selected-content) {
    font-size: 14px;
    font-weight: normal;
    color: #6D7176;
  }
```

```jsx:react
import { SlCheckbox } from '@teamshares/shoelace/dist/react';
const App = () => (
  <>
    <SlCheckbox contained style="width: 100%;">
      Checked
    </SlCheckbox>
    <SlCheckbox contained disabled style="width: 100%;">
      Disabled
    </SlCheckbox>
    <SlCheckbox contained checked style="width: 100%;">
      Checked
      <div slot="help-text">A short description about this option</div>
    </SlCheckbox>
  </>
);
```

### Checked

Use the `checked` attribute to activate the checkbox.

```html:preview
<sl-checkbox checked>Financial products access</sl-checkbox>
```

```pug:slim
sl-checkbox checked="true" Financial products access

/*
  When rendering with ts_form_for
*/

= ts_form_for ... do |f|
  = f.input :access,
    as: :boolean,
    input_html: {
      label: "Financial products access",
      checked: true,
    }
```

```jsx:react
import SlCheckbox from '@teamshares/shoelace/dist/react/checkbox';

const App = () => <SlCheckbox checked>Checked</SlCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

:::warning
The `indeterminate` option for a checkbox is currently not part of the Teamshares Design System, and there is no Figma component for this option. Please check with the design team before using this option.
:::

```html:preview
<sl-checkbox indeterminate>Indeterminate</sl-checkbox>
```

```pug:slim
sl-checkbox indeterminate="true" Indeterminate

/*
  When rendering with ts_form_for
*/

= ts_form_for ... do |f|
  = f.input :access,
    as: :boolean,
    input_html: {
      label: "Financial products access",
      indeterminate: true,
    }
```

```jsx:react
import SlCheckbox from '@teamshares/shoelace/dist/react/checkbox';

const App = () => <SlCheckbox indeterminate>Indeterminate</SlCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html:preview
<sl-checkbox disabled>Disabled</sl-checkbox>
```

```pug:slim
sl-checkbox disabled="true" Disabled

/*
  When rendering with ts_form_for
*/

= ts_form_for ... do |f|
  = f.input :access,
    as: :boolean,
    input_html: {
      label: "Financial products access",
      disabled: true,
    }
```

```jsx:react
import SlCheckbox from '@teamshares/shoelace/dist/react/checkbox';

const App = () => <SlCheckbox disabled>Disabled</SlCheckbox>;
```

<!-- ### Sizes

Use the `size` attribute to change a checkbox's size.

```html:preview
<sl-checkbox size="small">Small</sl-checkbox>
<br />
<sl-checkbox size="medium">Medium</sl-checkbox>
<br />
<sl-checkbox size="large">Large</sl-checkbox>
```

```pug:slim
sl-checkbox size="small" Small
br
sl-checkbox size="medium" Medium
br
sl-checkbox size="large" Large
```

```jsx:react
import SlCheckbox from '@teamshares/shoelace/dist/react/checkbox';

const App = () => (
  <>
    <SlCheckbox size="small">Small</SlCheckbox>
    <br />
    <SlCheckbox size="medium">Medium</SlCheckbox>
    <br />
    <SlCheckbox size="large">Large</SlCheckbox>
  </>
);
``` -->

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <sl-checkbox>Check me</sl-checkbox>
  <br />
  <sl-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</sl-button>
</form>
<script type="module">
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('sl-checkbox');
  const errorMessage = `Do not forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('sl-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('sl-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('sl-checkbox'),
  ]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

```pug:slim
form.custom-validity
  sl-checkbox Check me
  br
  sl-button type="submit" variant="primary" style="margin-top: 1rem;" Submit

javascript:
  const form = document.querySelector(.custom-validity);
  const checkbox = form.querySelector(sl-checkbox);
  const errorMessage = `Do not forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined(sl-checkbox).then(() => {
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener(sl-change, () => {
    checkbox.setCustomValidity(checkbox.checked ?  : errorMessage);
  });

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('sl-checkbox'),
  ]).then(() => {
    // Handle form submit
    form.addEventListener(submit, event => {
      event.preventDefault();
      alert(All fields are valid!);
    });
  });
```

{% raw %}

```jsx:react
import { useEffect, useRef } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlCheckbox from '@teamshares/shoelace/dist/react/checkbox';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Do not forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <SlCheckbox ref={checkbox} onSlChange={handleChange}>
        Check me
      </SlCheckbox>
      <br />
      <SlButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </SlButton>
    </form>
  );
};
```

{% endraw %}
