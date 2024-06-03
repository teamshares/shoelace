---
meta:
  title: Radio Group
  description: Radio groups are used to group multiple radios or radio buttons so they function as a single form control.
layout: component
unusedProperties: |
  - Sizes `small`, `large`
guidelines: |
  **When to Use a Radio Group**
  - When you want people to **choose just one** option from a list
  - When presenting **fewer than 7** options
  - If letting people **see all their options** right away (without an additional click) is a priority

  **When to Use a Different Component**
  - **Use a [checkbox group](/components/checkbox-group) instead** if presenting fewer than 5 to 7 options and you want to let people choose **multiple** options
  - **Use a [select](/components/select) instead** if presenting more than 7 options or there isn't enough room to present all the options

  **Labels, Help Text, Etc.**
  - For additional guidelines on radio and radio group **labels**, **help text**, and the  **label tooltip**, refer to the [Input component usage guidelines](/components/input/#usage-guidelines)
---

## Examples

### Basic Radio Group

A basic radio group lays out multiple radio items vertically. Generally a radio group should have one item selected by default.

```html:preview
<sl-radio-group label="What would you like to do?" name="a" value="issue_shares" required>
  <sl-radio value="issue_shares">Issue shares</sl-radio>
  <sl-radio value="employee_buyback">Employee buyback</sl-radio>
  <sl-radio value="cancel_certificate">Cancel a certificate</sl-radio>
</sl-radio-group>
```

```pug:slim
sl-radio-group[
  label="What would you like to do?"
  name="a"
  value="issue_shares"
  required
]
  sl-radio value="issue_shares" Issue shares
  sl-radio value="employee_buyback" Employee buyback
  sl-radio value="cancel_certificate" Cancel a certificate

/*
  When rendering with ts_form_for
  — NOTE: To set default value for initial page load, ensure a value is set
  in the controller's #new action:

  e.g. @cap_table_event = CapTableEvent.new(a: "issue_shares")
*/

= ts_form_for ... do |f|
  = f.input :a,
    as: :radio_buttons,
    label: "What would you like to do?",
    collection: [
      ["Issue shares", "issue_shares"],
      ["Employee buyback", "employee_buyback"],
      ["Cancel a certificate", "cancel_certificate"],
    ],
    wrapper_html: {
      required: true
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

### Help Text

Add descriptive help text to a radio group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<sl-radio-group label="What would you like to do?" help-text="Contact support if you don't see the option you need here" name="a" value="issue_shares">
  <sl-radio value="issue_shares">Issue shares</sl-radio>
  <sl-radio value="employee_buyback">Employee buyback</sl-radio>
  <sl-radio value="cancel_certificate">Cancel a certificate</sl-radio>
</sl-radio-group>
<br />
<br />
<sl-radio-group label="What would you like to do?" name="a" value="issue_shares">
  <sl-radio value="issue_shares">Issue shares</sl-radio>
  <sl-radio value="employee_buyback">Employee buyback</sl-radio>
  <sl-radio value="cancel_certificate">Cancel a certificate</sl-radio>
  <div slot="help-text"><a href="#" class="ts-text-link">Contact support</a> if you don't see the option you need here</div>
</sl-radio-group>
```

```pug:slim
sl-radio-group[
  label="What would you like to do?"
  name="a"
  value="issue_shares"
  help-text="Contact support if you don't see the option you need here"
]
  sl-radio value="issue_shares" Issue shares
  sl-radio value="employee_buyback" Employee buyback
  sl-radio value="cancel_certificate" Cancel a certificate
br
br
sl-radio-group[
  label="What would you like to do?"
  name="a"
  value="issue_shares"
]
  sl-radio value="issue_shares" Issue shares
  sl-radio value="employee_buyback" Employee buyback
  sl-radio value="cancel_certificate" Cancel a certificate
  div slot="help-text"
    a href="#" class="ts-text-link" Contact support
    | if you don't see the option you need here

/*
  When rendering with ts_form_for
  — NOTE: To set default value for initial page load, ensure a value is set
  in the controller's #new action:
  e.g. @cap_table_event = CapTableEvent.new(a: "issue_shares")

  — NOTE: Slots are not supported with ts_form_for —
*/

= ts_form_for ... do |f|
  = f.input :a,
    as: :radio_buttons,
    label: "What would you like to do?",
    collection: [
      ["Issue shares", "issue_shares"],
      ["Employee buyback", "employee_buyback"],
      ["Cancel a certificate", "cancel_certificate"],
    ],
    wrapper_html: {
      "help-text": "Contact support if you don't see the option you need here"
    }
```

```jsx:react
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <SlRadio value="1">Option 1</SlRadio>
    <SlRadio value="2">Option 2</SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
  </SlRadioGroup>
);
```

### Label with Tooltip

Use the `label-tooltip` attribute to add text that appears in a tooltip triggered by an info icon next to the label.

:::tip
**Usage:** Use a **label tooltip** to provide helpful but non-essential instructions or examples to guide people when making a selection from the radio group. Use **help text** to communicate instructions or requirements for making a selection without errors.
:::

```html:preview
<sl-radio-group label="What would you like to do?" help-text="Contact support if you don't see the option you need here" name="a" value="issue_shares" label-tooltip="These changes will update the cap table">
  <sl-radio value="issue_shares">Issue shares</sl-radio>
  <sl-radio value="employee_buyback">Employee buyback</sl-radio>
  <sl-radio value="cancel_certificate">Cancel a certificate</sl-radio>
</sl-radio-group>
```

```pug:slim
sl-radio-group[
  label="What would you like to do?"
  help-text="Contact support if you don't see the option you need here"
  name="a" value="issue_shares"
  label-tooltip="These changes will update the cap table"
]
  sl-radio value="issue_shares" Issue shares
  sl-radio value="employee_buyback" Employee buyback
  sl-radio value="cancel_certificate" Cancel a certificate

/*
  When rendering with ts_form_for
  — NOTE: To set default value for initial page load, ensure a value is set
  in the controller's #new action:
  e.g. @cap_table_event = CapTableEvent.new(a: "issue_shares")
*/

= ts_form_for ... do |f|
  = f.input :a,
    as: :radio_buttons,
    label: "What would you like to do?",
    collection: [
      ["Issue shares", "issue_shares"],
      ["Employee buyback", "employee_buyback"],
      ["Cancel a certificate", "cancel_certificate"],
    ],
    wrapper_html: {
      "help-text": "Contact support if you don't see the option you need here",
      "label-tooltip": "These changes will update the cap table",
    }
```

```jsx:react
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <SlRadio value="1">Option 1</SlRadio>
    <SlRadio value="2">Option 2</SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
  </SlRadioGroup>
);
```

### Horizontal Radio Group

Use the `horizontal` attribute to lay out multiple radio items horizontally.

:::tip
**Making the horizontal radio group responsive:** Use a container query to adjust the layout of the radio group's `form-control-input` part (which wraps the radio items) at a custom target breakpoint (the container's width when the horizontal layout breaks). In the example below, a container query checks the width of the radio group container and switches the layout to vertical (setting `flex-direction` to `column`) when the container becomes too narrow for a horizontal layout.
:::

```html:preview
<sl-radio-group id="question-1" label="What would you like to do?" name="a" value="issue_shares" horizontal>
  <sl-radio value="issue_shares">Issue shares</sl-radio>
  <sl-radio value="employee_buyback">Employee buyback</sl-radio>
</sl-radio-group>

<style>
  sl-radio-group[id="question-1"] {
    container-type: inline-size;
    container-name: question-1;
  }

  @container question-1 (max-width: 360px) {
    sl-radio-group[id="question-1"]::part(form-control-input) {
      flex-direction: column;
    }
  }
</style>
```

```pug:slim
sl-radio-group[
  id="question-1"
  label="What would you like to do?"
  name="a"
  value="issue_shares"
  horizontal="true"
]
  sl-radio value="issue_shares" Issue shares
  sl-radio value="employee_buyback" Employee buyback

/*
  When rendering with ts_form_for
  — NOTE: To set default value for initial page load, ensure a value is set
  in the controller's #new action:
  e.g. @cap_table_event = CapTableEvent.new(a: "issue_shares")
*/

= ts_form_for ... do |f|
  = f.input :a,
    as: :radio_buttons,
    label: "What would you like to do?",
    collection: [
      ["Issue shares", "issue_shares"],
      ["Employee buyback", "employee_buyback"],
    ],
    wrapper_html: {
      horizontal: true,
      id: "question-1",
    }

css:
    sl-radio-group[id="question-1"] {
    container-type: inline-size;
    container-name: question-1;
  }

  @container question-1 (max-width: 360px) {
    sl-radio-group[id="question-1"]:part(form-control-input) {
      flex-direction: column;
    }
  }
```

```jsx:react
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <SlRadio value="1">Option 1</SlRadio>
    <SlRadio value="2">Option 2</SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
  </SlRadioGroup>
);
```

### Contained Radio Group

Use the `contained` attribute to draw a card-like container around each radio item in the radio group. This style is useful for giving more emphasis to the list of options.

This option can be combined with the `horizontal` attribute.

```html:preview
<sl-radio-group label="What would you like to do?" help-text="Contact support if you don't see the option you need here" name="a" value="issue_shares" contained>
  <sl-radio value="issue_shares">Issue shares</sl-radio>
  <sl-radio value="employee_buyback">Employee buyback</sl-radio>
  <sl-radio value="cancel_certificate">Cancel a certificate</sl-radio>
</sl-radio-group>
<br/>
<br/>
<sl-radio-group label="What would you like to do?" help-text="Contact support if you don't see the option you need here" name="b" value="issue_shares" contained horizontal>
  <sl-radio value="issue_shares">Issue shares</sl-radio>
  <sl-radio value="employee_buyback">Employee buyback</sl-radio>
  <sl-radio value="cancel_certificate">Cancel a certificate</sl-radio>
</sl-radio-group>
```

```pug:slim
sl-radio-group[
  label="What would you like to do?"
  name="a"
  value="issue_shares"
  help-text="Contact support if you don't see the option you need here"
  contained="true"
]
  sl-radio value="issue_shares" Issue shares
  sl-radio value="employee_buyback" Employee buyback
  sl-radio value="cancel_certificate" Cancel a certificate
br
br
sl-radio-group[
  label="What would you like to do?"
  name="b"
  value="issue_shares"
  help-text="Contact support if you don't see the option you need here"
  horizontal="true"
  contained="true"
]
  sl-radio value="issue_shares" Issue shares
  sl-radio value="employee_buyback" Employee buyback
  sl-radio value="cancel_certificate" Cancel a certificate

/*
  When rendering with ts_form_for
  — NOTE: To set default value for initial page load, ensure a value is set
  in the controller's #new action:
  e.g. @cap_table_event = CapTableEvent.new(a: "issue_shares")
*/

= ts_form_for ... do |f|
  = f.input :a,
    as: :radio_buttons,
    label: "What would you like to do?",
    collection: [
      ["Issue shares", "issue_shares"],
      ["Employee buyback", "employee_buyback"],
      ["Cancel a certificate", "cancel_certificate"],
    ],
    wrapper_html: {
      "help-text": "Contact support if you don't see the option you need here"
      horizontal: true,
    }
  = f.input :b,
    as: :radio_buttons,
    label: "What would you like to do?",
    collection: [
      ["Issue shares", "issue_shares"],
      ["Employee buyback", "employee_buyback"],
      ["Cancel a certificate", "cancel_certificate"],
    ],
    wrapper_html: {
      "help-text": "Contact support if you don't see the option you need here"
      horizontal: true,
      contained: true,
    }
```

```jsx:react
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <SlRadio value="1">Option 1</SlRadio>
    <SlRadio value="2">Option 2</SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
  </SlRadioGroup>
);
```

:::tip
Adding the `contained` attribute to the parent Radio Group or to _any_ [radio](/components/radio) in the group will create `contained` radios for the entire group.
:::

### Group with Segmented Controls

Shoelace's [radio buttons](/components/radio-button), also commonly called Segmented Controls, offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

:::warning
**Note:** The Radio Button pattern is being redesigned. Please check with the design team before using this pattern.
:::
:::warning
**Note:** `ts_form_for` doesn't support `sl-radio-button`.
:::

```html:preview
<sl-radio-group label="Select an option" help-text="Select an option that makes you proud." name="a" value="1">
  <sl-radio-button value="1">Option 1</sl-radio-button>
  <sl-radio-button value="2">Option 2</sl-radio-button>
  <sl-radio-button value="3">Option 3</sl-radio-button>
</sl-radio-group>
```

```pug:slim
/*
  NOTE: `ts_form_for` doesn't support `sl-radio-button`.
*/
sl-radio-group[
  label="Select an option"
  help-text="Select an option that makes you proud."
  name="a"
  value="1"
]
  sl-radio-button value="1" Option 1
  sl-radio-button value="2" Option 2
  sl-radio-button value="3" Option 3
```

```jsx:react
import SlRadioButton from '@teamshares/shoelace/dist/react/radio-button';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" name="a" value="1">
    <SlRadioButton value="1">Option 1</SlRadioButton>
    <SlRadioButton value="2">Option 2</SlRadioButton>
    <SlRadioButton value="3">Option 3</SlRadioButton>
  </SlRadioGroup>
);
```

### Disabling Options

Radios and radio buttons can be disabled by adding the `disabled` attribute to the respective options inside the radio group.

```html:preview
<sl-radio-group label="What would you like to do?" name="a" value="issue_shares">
  <sl-radio value="issue_shares">Issue shares</sl-radio>
  <sl-radio value="employee_buyback">Employee buyback</sl-radio>
  <sl-radio value="cancel_certificate" disabled>Cancel a certificate</sl-radio>
</sl-radio-group>
```

```pug:slim
sl-radio-group[
  label="What would you like to do?"
  name="a"
  value="issue_shares"
]
  sl-radio value="issue_shares" Issue shares
  sl-radio value="employee_buyback" Employee buyback
  sl-radio value="cancel_certificate" disabled="true" Cancel a certificate

/*
  When rendering with ts_form_for
  — NOTE: To set default value for initial page load, ensure a value is set
  in the controller's #new action:
  e.g. @cap_table_event = CapTableEvent.new(a: "issue_shares")
*/

= ts_form_for ... do |f|
  = f.input :a,
    as: :radio_buttons,
    label: "What would you like to do?",
    collection: [
      ["Issue shares", "issue_shares"],
      ["Employee buyback", "employee_buyback"],
      ["Cancel a certificate", "cancel_certificate", disabled: true],
    ]
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

### Sizing Options

The size of [Radios](/components/radio) and [Radio Buttons](/components/radio-buttons) will be determined by the Radio Group's `size` attribute.

:::warning
Sizes `small` and `large` are currently not part of the Teamshares Design System, and there are no Figma components for these options. Please check with the design team before using these options.
:::

```html:preview
<sl-radio-group label="Select an option" size="medium" value="medium" class="radio-group-size">
  <sl-radio value="small">Small</sl-radio>
  <sl-radio value="medium">Medium</sl-radio>
  <sl-radio value="large">Large</sl-radio>
</sl-radio-group>

<script>
  const radioGroup = document.querySelector('.radio-group-size');

  radioGroup.addEventListener('sl-change', () => {
    radioGroup.size = radioGroup.value;
  });
</script>
```

```pug:slim
sl-radio-group.radio-group-size[
  label="Select an option"
  size="medium"
  value="medium"
]
  sl-radio value="small" Small
  sl-radio value="medium" Medium
  sl-radio value="large" Large

/*
  When rendering with ts_form_for
  — NOTE: To set default value for initial page load, ensure a value is set
  in the controller's #new action:
  e.g. @cap_table_event = CapTableEvent.new(a: "issue_shares")
*/

= ts_form_for ... do |f|
  = f.input :a,
    as: :radio_buttons,
    label: "Select an option",
    collection: [
      ["Small", "small"],
      ["Medium", "medium"],
      ["Large", "large"],
    ],
    wrapper_html: {
      class: "radio-group-size"
    }

javascript:
  const radioGroup = document.querySelector('.radio-group-size');
  radioGroup.addEventListener('sl-change', () => {
    radioGroup.size = radioGroup.value;
  });
```

```jsx:react
import { useState } from 'react';
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => {
  const [size, setSize] = useState('medium');

  return (
    <>
      <SlRadioGroup
        label="Select an option"
        size={size}
        value={size}
        class="radio-group-size"
        onSlChange={event => setSize(event.target.value)}
      >
        <SlRadio value="small">Small</SlRadio>
        <SlRadio value="medium">Medium</SlRadio>
        <SlRadio value="large">Large</SlRadio>
      </SlRadioGroup>
    </>
  );
};
```

:::tip
[Radios](/components/radio) and [Radio Buttons](/components/radio-button) also have a `size` attribute. This can be useful in certain compositions, but it will be ignored when used inside of a Radio Group.
:::

### Validation

Set the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.

```html:preview
<form class="validation">
  <sl-radio-group label="Select an option" name="a" required>
    <sl-radio value="1">Option 1</sl-radio>
    <sl-radio value="2">Option 2</sl-radio>
    <sl-radio value="3">Option 3</sl-radio>
  </sl-radio-group>
  <br />
  <sl-button type="submit" variant="primary">Submit</sl-button>
</form>

<script type="module">
  const form = document.querySelector('.validation');

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('sl-radio-group'),
  ]).then(() => {
  // Handle form submit
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
    label="Select an option"
    name="a"
    required="true"
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

/*
  When rendering with ts_form_for
*/

= ts_form_for ... do |f|
  = f.input :a,
    as: :radio_buttons,
    label: "Select an option",
    collection: [
        ["Option 1", "1"],
        ["Option 2", "2"],
        ["Option 3", "3"],
    ],
    wrapper_html: {
      required: true
    }
  br
  // ts_form_for automatically sets the form's submit button to variant="primary"
  = f.submit "Submit"

javascript:
  const form = document.querySelector(.validation);

  // Wait for controls to be defined before attaching form listeners
  await Promise.all([
    customElements.whenDefined('sl-radio-group'),
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

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <sl-radio-group label="Select an option" name="a" value="1">
    <sl-radio value="1">Not me</sl-radio>
    <sl-radio value="2">Me neither</sl-radio>
    <sl-radio value="3">Choose me</sl-radio>
  </sl-radio-group>
  <br />
  <sl-button type="submit" variant="primary">Submit</sl-button>
</form>

<script type="module">
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('sl-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('sl-radio').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('sl-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  await Promise.all([
    customElements.whenDefined('sl-radio-group'),
  ]).then(() => {
    // Handle form submit
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

```pug:slim
form.custom-validity
  sl-radio-group label="Select an option" name="a" value="1"
    sl-radio value="1" Not me
    sl-radio value="2" Me neither
    sl-radio value="3" Choose me
  br
  sl-button type="submit" variant="primary" Submit

javascript:
  const form = document.querySelector(.custom-validity);
  const radioGroup = form.querySelector(sl-radio-group);
  const errorMessage = You must choose the last option;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined(sl-radio-group).then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener(sl-change, () => {
    const isValid = radioGroup.value === 3;
    radioGroup.setCustomValidity(isValid ?  : errorMessage);
  });

  await Promise.all([
    customElements.whenDefined('sl-radio-group'),
  ]).then(() => {
    // Handle form submit
    form.addEventListener(submit, event => {
      event.preventDefault();
      alert(All fields are valid!);
    });
  });
```

```jsx:react
import { useEffect, useRef } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlRadio from '@teamshares/shoelace/dist/react/radio';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';
const App = () => {
  const radioGroup = useRef(null);
  const errorMessage = 'You must choose this option';

  function handleChange() {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <SlRadioGroup ref={radioGroup} label="Select an option" name="a" value="1" onSlChange={handleChange}>
        <SlRadio value="1">Not me</SlRadio>
        <SlRadio value="2">Me neither</SlRadio>
        <SlRadio value="3">Choose me</SlRadio>
      </SlRadioGroup>
      <br />
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```
