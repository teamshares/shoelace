---
meta:
  title: Checkbox Group
  description:
layout: component
unusedProperties: |
  - Sizes `small`, `large`
guidelines: |
  ### When to Use a Checkbox Group
  - When you want people to **choose one or more** options from a list
  - When presenting **fewer than 7** options
  - If letting people **see all their options** right away (without an additional click) is a priority

  ### When to Use Something Else
  - **Use a [radio group](/components/radio-group) instead** if presenting fewer than 5 to 7 options and you want to let people choose **just one** option
  - **Use a multi-select [select](/components/select) instead** if presenting more than 7 options or there isn't enough room to present all the options

  ### Labels, Help Text, Etc.
  - For additional guidelines on checkbox and checkbox group **labels**, **help text**, and the  **label tooltip**, refer to the [Input component usage guidelines](/components/input/#usage-guidelines)
testing: |
  ### With Cypress

  **Adding `data-test-id` to a component**

   To test `sl-checkbox-group`, add the `data-test-id` attribute directly to the component. To test checkbox items in the group, add `data-test-id` to each item:

  ```pug:slim
    sl-checkbox-group[
      label="Checkbox group text"
      name="input-name"
      data-test-id="checkbox-group-test"
    ] 
      sl-checkbox[
        value="option-1"
        data-test-id="item-test-1"
      ] 
        | Option 1
      sl-checkbox[
        value="option-2" 
        data-test-id="item-test-2"
      ] 
        | Option 2
      sl-checkbox[
        value="option-3" 
        data-test-id="item-test-3"
      ] 
        | Option 3
  ```

  To test `sl-checkbox-group` implemented with `ts_form_for`, add `data-test-id` to `wrapper_html`. To test checkbox items in the group, add `data-test-id` to each item in the collection array:

  ```js
      = ts_form_for ... do |f|
        = f.input :input_name,
          as: :check_boxes,
          label: "Checkbox group text",
          collection: [
            ["Option 1", :option-1, data: { test_id: "item-test-1" }],
            ["Option 2", :option-2, data: { test_id: "item-test-2" }],
            ["Option 3", :option-3, data: { test_id: "item-test-3" }],
          ],
          wrapper_html: { 
            data: { 
              test_id: "checkbox-group-test"
            }
          }
  ```

  **Cypress commands for `sl-checkbox-group`**

  To **check** any checkbox in the checkbox group:
  ```js
    cy.slCheckboxCheck(`[data-test-id="item-test-1"]`);
  ```

  To **uncheck** any checkbox in a checkbox group:
  ```js
    cy.slCheckboxUncheck(`[data-test-id="item-test-1"]`);
  ```

  To verify the checkbox group's value, that certain items **are checked**:
  ```js
    cy.slCheckboxGroupValue(`[data-test-id="checkbox-group-test"]`, ["option-1", "option-2"]);
  ```

  To verify the checkbox group's value, that certain items **are NOT checked**:
  ```js
    cy.get(`[data-test-id="checkbox-group-test"]`).should("not.have.value", "option-3");
  ```
---

## Examples

### Basic Checkbox Group

A basic checkbox group lays out multiple checkbox items vertically.

```html:preview
<sl-checkbox-group label="Financial products permissions" name="a">
  <sl-checkbox value="initiate-outbound">Initiate outbound transfers</sl-checkbox>
  <sl-checkbox value="approve-outbound">Approve outbound transfers </sl-checkbox>
  <sl-checkbox value="export">Export transactions</sl-checkbox>
</sl-checkbox-group>
```

```pug:slim
sl-checkbox-group[
  label="Financial products permissions"
  name="a"
]
  sl-checkbox value="initiate-outbound" Initiate outbound transfers
  sl-checkbox value="approve-outbound" Approve outbound transfers
  sl-checkbox value="export" Export transactions
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :a,
    as: :check_boxes,
    label: "Financial products permissions",
    collection: [
      ["Initiate outbound transfers", "initiate-outbound"],
      ["Approve outbound transfers", "approve-outbound"],
      ["Export transactions", "export"],
    ]
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

### Help Text

Add descriptive help text to a checkbox group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<sl-checkbox-group label="Financial products permissions" help-text="Outbound transfers require separate initiators and approvers" name="a">
  <sl-checkbox value="initiate-outbound">Initiate outbound transfers</sl-checkbox>
  <sl-checkbox value="approve-outbound">Approve outbound transfers </sl-checkbox>
  <sl-checkbox value="export">Export transactions</sl-checkbox>
</sl-checkbox-group>
```

```pug:slim
sl-checkbox-group[
  label="Financial products permissions"
  help-text="Outbound transfers require separate initiators and approvers"
  name="a"
]
  sl-checkbox value="initiate-outbound" Initiate outbound transfers
  sl-checkbox value="approve-outbound" Approve outbound transfers
  sl-checkbox value="export" Export transactions
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :a,
    as: :check_boxes,
    label: "Financial products permissions",
    collection: [
      ["Initiate outbound transfers", "initiate-outbound"],
      ["Approve outbound transfers", "approve-outbound"],
      ["Export transactions", "export"],
    ],
    wrapper_html: {
      "help-text": "Outbound transfers require separate initiators and approvers",
    }
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

### Label with Tooltip

Use the `label-tooltip` attribute to add text that appears in a tooltip triggered by an info icon next to the label.

:::tip
**Usage:** Use a **label tooltip** to provide helpful but non-essential instructions or examples to guide people when making a selection from the checkbox group. Use **help text** to communicate instructions or requirements for making a selection without errors.
:::

```html:preview
<sl-checkbox-group name="a" label="Financial products permissions" help-text="Outbound transfers require separate initiators and approvers" label-tooltip="These apply to cash account only">
  <sl-checkbox value="initiate-outbound">Initiate outbound transfers</sl-checkbox>
  <sl-checkbox value="approve-outbound">Approve outbound transfers </sl-checkbox>
  <sl-checkbox value="export">Export transactions</sl-checkbox>
</sl-checkbox-group>
```

```pug:slim
sl-checkbox-group[
  name="a"
  label="Financial products permissions"
  help-text="Outbound transfers require separate initiators and approvers"
  label-tooltip="These apply to cash account only"
]
  sl-checkbox value="initiate-outbound" Initiate outbound transfers
  sl-checkbox value="approve-outbound" Approve outbound transfers
  sl-checkbox value="export" Export transactions
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :a,
    as: :check_boxes,
    label: "Financial products permissions",
    collection: [
      ["Initiate outbound transfers", "initiate-outbound"],
      ["Approve outbound transfers", "approve-outbound"],
      ["Export transactions", "export"],
    ],
    wrapper_html: {
      "help-text": "Outbound transfers require separate initiators and approvers",
      "label-tooltip": "These apply to cash account only",
    }
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

### Horizontal Checkbox Group

Use the `horizontal` attribute to lay out multiple checkbox items horizontally.

:::tip
**Making the horizontal checkbox group responsive:** Use a container query to adjust the layout of the checkbox group's `form-control-input` part (which wraps the checkbox items) at a custom target breakpoint (the container's width when the horizontal layout breaks). In the example below, a container query checks the width of the checkbox group container and switches the layout to vertical (setting `flex-direction` to `column`) when the container becomes too narrow for a horizontal layout.
:::

```html:preview
<sl-checkbox-group name="a" id="permissions" label="Financial products permissions" horizontal>
  <sl-checkbox value="manage-transfers">Manage transfers</sl-checkbox>
  <sl-checkbox value="export">Export transactions</sl-checkbox>
</sl-checkbox-group>

<style>
  sl-checkbox-group[id="permissions"] {
    container-type: inline-size;
    container-name: permissions;
  }

  @container permissions (max-width: 400px) {
    sl-checkbox-group[id="permissions"]::part(form-control-input) {
      flex-direction: column;
    }
  }
</style>
```

```pug:slim
sl-checkbox-group[
  name="a"
  id="permissions"
  label="Financial products permissions"
]
  sl-checkbox value="manage-transfers" Manage transfers
  sl-checkbox value="export" Export transactions

css:
sl-checkbox-group[id="permissions"] {
  container-type: inline-size;
  container-name: permissions;
}

@container permissions (max-width: 400px) {
  sl-checkbox-group[id="permissions"]::part(form-control-input) {
    flex-direction: column;
  }
}
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :a,
    as: :check_boxes,
    label: "Financial products permissions",
    collection: [
      ["Manage transfers", "manage-transfers"],
      ["Export transactions", "export"],
    ],
    wrapper_html: {
      horizontal: true,
      id: "permissions",
    }
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

### Contained Checkbox Group

Use the `contained` attribute to draw a card-like container around each checkbox item in the checkbox group. This style is useful for giving more emphasis to the list of options.

This option can be combined with the `horizontal` attribute.

```html:preview
<sl-checkbox-group name="a" label="Financial products permissions" help-text="Outbound transfers require separate initiators and approvers" contained>
  <sl-checkbox value="initiate-outbound">Initiate outbound transfers</sl-checkbox>
  <sl-checkbox value="approve-outbound">Approve outbound transfers </sl-checkbox>
  <sl-checkbox value="export">Export transactions</sl-checkbox>
</sl-checkbox-group>
<br/>
<br/>
<sl-checkbox-group name="b" label="Financial products permissions" help-text="Outbound transfers require separate initiators and approvers" contained horizontal>
  <sl-checkbox value="initiate-outbound">Initiate outbound transfers</sl-checkbox>
  <sl-checkbox value="approve-outbound">Approve outbound transfers </sl-checkbox>
</sl-checkbox-group>
```

```pug:slim
sl-checkbox-group[
  name="a"
  label="Financial products permissions"
  help-text="Outbound transfers require separate initiators and approvers"
  contained=true
]
  sl-checkbox value="initiate-outbound" Initiate outbound transfers
  sl-checkbox value="approve-outbound" Approve outbound transfers
  sl-checkbox value="export" Export transactions
br
br
sl-checkbox-group[
  name="b"
  label="Financial products permissions"
  help-text="Outbound transfers require separate initiators and approvers"
  contained=true
  horizontal=true
]
  sl-checkbox value="initiate-outbound" Initiate outbound transfers
  sl-checkbox value="approve-outbound" Approve outbound transfers
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :a,
    as: :check_boxes,
    label: "Financial products permissions",
    collection: [
      ["Initiate outbound transfers", "initiate-outbound"],
      ["Approve outbound transfers", "approve-outbound"],
      ["Export transactions", "export"],
    ],
    wrapper_html: {
      "help-text": "Outbound transfers require separate initiators and approvers",
      contained: true,
    }
  = f.input :b,
    as: :check_boxes,
    label: "Financial products permissions",
    collection: [
      ["Initiate outbound transfers", "initiate-outbound"],
      ["Approve outbound transfers", "approve-outbound"],
    ],
    wrapper_html: {
      "help-text": "Outbound transfers require separate initiators and approvers",
      contained: true,
      horizontal: true,
    }
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
When [checkboxes](/components/checkbox) are wrapped with the Checkbox Group , adding the `contained` attribute to the parent Checkbox Group or to _any_ checkbox in the group will create `contained` checkboxes for the entire group.
:::

### Disabling Options

Checkboxes can be disabled by adding the `disabled` attribute to the respective options inside the checkbox group.

```html:preview
<sl-checkbox-group name="a"  label="Financial products permissions" help-text="Exporting is currently disabled for all users" required>
  <sl-checkbox value="initiate-outbound">Initiate outbound transfers</sl-checkbox>
  <sl-checkbox value="approve-outbound">Approve outbound transfers </sl-checkbox>
  <sl-checkbox value="export" disabled>Export transactions</sl-checkbox>
</sl-checkbox-group>
```

```pug:slim
sl-checkbox-group[
  name="a"
  label="Financial products permissions"
]
  sl-checkbox value="initiate-outbound" Initiate outbound transfers
  sl-checkbox value="approve-outbound" Approve outbound transfers
  sl-checkbox value="export" disabled=true Export transactions
```

```js:simple-form
/*
  When rendering `sl-checkbox-group` with ts_form_for, pass additional
  attributes such as `disabled` and `description` as extra items
  in the collection array after the label and value.
  By default Simple Form will use the first item
  as the label and the second item as the value, then pass
  any additional array items as attributes on the `sl-checkbox`.
*/

= ts_form_for ... do |f|
  = f.input :a,
    as: :check_boxes,
    label: "Financial products permissions",
    collection: [
      [
        "Initiate outbound transfers",
        "initiate-outbound",
      ],
      [
        "Approve outbound transfers",
        "approve-outbound",
      ],
      [
        "Export transactions",
        "export",
        disabled: true,
      ],
    ],
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

### Validation

Set the `required` attribute to make selecting at least one option mandatory. If at least one value has not been selected, it will prevent the form from submitting and display an error message.

```html:preview
<form class="validation">
  <sl-checkbox-group name="a" label="Select at least one option" required>
    <sl-checkbox value="option-1">Option 1</sl-checkbox>
    <sl-checkbox value="option-2">Option 2</sl-checkbox>
    <sl-checkbox value="option-3">Option 3</sl-checkbox>
  </sl-checkbox-group>
  <br />
  <sl-button type="submit" variant="primary">Submit</sl-button>
</form>

<script type="module">
  const form = document.querySelector('.validation');

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('sl-checkbox-group'),
  ]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

```pug:slim
form.validation
  sl-radio-group[
    name="a"
    label="Select at least one option"
    required=true
  ]
    sl-radio value="1" Option 1
    sl-radio value="2" Option 2
    sl-radio value="3" Option 3
  br
  sl-button[
    type="submit"
    variant="primary"
  ]
    | Submit

javascript:
  const form = document.querySelector(.validation);

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('sl-checkbox-group'),
  ]).then(() => {
    // Handle form submit
    form.addEventListener(submit, event => {
      event.preventDefault();
      alert(All fields are valid!);
    });
  });
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :a,
    as: :check_boxes,
    label: "Select at least one option",
    collection: [
      ["Option 1", "1"],
      ["Option 2", "2"],
      ["Option 3", "3"],
    ],
    wrapper_html: {
      required: true,
    }

// ts_form_for automatically sets the form's submit button to variant="primary"
= f.submit "Submit"
```

```jsx:react
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <SlRadioGroup label="Select an option" name="a" required onSlChange={handleChange}>
        <SlRadio value="1">
          Option 1
        </SlRadio>
        <SlRadiovalue="2">
          Option 2
        </SlRadio>
        <SlRadio value="3">
          Option 3
        </SlRadio>
      </SlRadioGroup>
      <br />
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <sl-checkbox-group name="a" label="Select the third option" required>
    <sl-checkbox value="option-1">You can optionally choose me</sl-checkbox>
    <sl-checkbox value="option-2">I'm optional too</sl-checkbox>
    <sl-checkbox value="option-3">You must choose me</sl-checkbox>
  </sl-checkbox-group>
  <br />
  <sl-button type="submit" variant="primary">Submit</sl-button>
</form>

<script type="module">
  const form = document.querySelector('.custom-validity');
  const checkboxGroup = form.querySelector('sl-checkbox-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('sl-checkbox').then(() => {
    checkboxGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('sl-change', () => {
    const isValid = checkboxGroup.value.some(value => value.includes('option-3'));
    checkboxGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('sl-checkbox-group'),
  ]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

```pug:slim
form.validation
  sl-radio-group name="a" label="Select the third option" required=true
    sl-radio value="1" You can optionally choose me
    sl-radio value="2" I'm optional too
    sl-radio value="3" You must choose me
  br
  sl-button type="submit" variant="primary" Submit

javascript:
  const form = document.querySelector(.custom-validity);
  const checkboxGroup = form.querySelector('sl-checkbox-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('sl-checkbox').then(() => {
    checkboxGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('sl-change', () => {
    const isValid = checkboxGroup.value.some(value => value.includes('option-3'));
    checkboxGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('sl-checkbox-group'),
  ]).then(() => {
    // Handle form submit
    form.addEventListener(submit, event => {
      event.preventDefault();
      alert(All fields are valid!);
    });
  });
```

```jsx:react
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <SlRadioGroup label="Select an option" name="a" required onSlChange={handleChange}>
        <SlRadio value="1">
          Option 1
        </SlRadio>
        <SlRadiovalue="2">
          Option 2
        </SlRadio>
        <SlRadio value="3">
          Option 3
        </SlRadio>
      </SlRadioGroup>
      <br />
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```
