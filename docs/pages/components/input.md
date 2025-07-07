---
meta:
  title: Input
  description: Inputs collect data from the user.
layout: component
unusedProperties: |
  - Size `small`
  - Booleans `filled`, `pill`
guidelines: |
  ### Labels

  - **Always** have a label 
  - Use **sentence case** for labels
  - **Don't** end labels with punctuation unless asking a question
  - Keep labels **short and easy to scan**
  - Aim for **consistency** throughout a single form

  :::tip
  **Do**
  <div style="padding: 0 0 .5rem;"><sl-input label="What is your name?"></sl-input></div>
  <div style="padding: 0 0 .5rem;"><sl-input label="When is your birthdate?"></sl-input></div>

  - Do use a question format for labels when appropriate
  - Do use sentence case
  - Do use punctuation if you are asking a question
  :::

  :::danger 
  **Don't**
  <div style="padding: 0 0 .5rem;"><sl-input label="Full Name."></sl-input></div>
  <div style="padding: 0 0 .5rem;"><sl-input label="When Is Your Birthdate?"></sl-input></div>

  - Don't mix label styles in a single form (e.g. a phrase for one input, followed by a question)
  - Don't use title case
  - Don't end with punctuation unless the label is a complete sentence
  :::

  ### Help Text

  - Keep help text **concise and useful** -- make every word count!
  - Use a period only if help text includes more than one complete sentence

  :::tip
  **Do**
  <div style="padding: 0 0 .5rem;"><sl-input label="Email address" help-text="E.g. grace@hopper.com"></sl-input></div>

  - Do use help text to provide guidance on what to input or how to input
  :::

  :::danger 
  **Don't**
  <div style="padding: 0 0 .5rem;"><sl-input label="Email address" help-text="Enter your email address"></sl-input></div>

  - Don't use help text to just restate the label. Just skip the help text if it's not needed!
  :::


  ### Placeholder Text

  - **Don't use placeholder text**, for the following reasons:
    - Placeholder text is easy to mistake for an input that's already filled in
    - Placeholder text disappears as soon as people start entering text into the input and can create a frustrating experience
  - **Instead of** placeholder text, use:
    - A label to explain what the input is for
    - Help text to give people instructions or requirements for completing the input

  :::tip
  **Do**
  <div style="padding: 0 0 .5rem;"><sl-input type="password" label="Password" help-text="Password must be at least 8 characters and include at least 1 number and 1 capital letter" password-toggle></sl-input></div>

  - Do use a label and help text to guide people
  :::

  :::danger 
  **Don't**
  <div style="padding: 0 0 .5rem;"><sl-input type="password" placeholder="At least 8 characters with at least 1 number and 1 letter" label="Password" password-toggle></sl-input></div>

  - Don't use placeholder text
  :::

  ### Help Text, Label Tooltip, or Context Note?

  - Use **Help Text** to communicate instructions or requirements for filling in the input without errors
  - Use the **Label Tooltip** to provide helpful but non-essential instructions or examples to guide people when filling in the input. People might choose not to view the tooltip content, so don't put any essential information there.
  - Use the **Context Note** to provide secondary contextual data, especially dynamic data, that would help people when filling in the input
  - Help text is generally the best way to add hints or instructions to help people fill in the input for most use cases
  - If you think you need to use the Label Tooltip or Context Note, first consider whether the same information would work as help text if it were shorter or presented differently
testing: |
  ### With Cypress

  **Adding `data-test-id` to a component**

   To test `sl-input`, add the `data-test-id` attribute directly to the component:

  ```pug:slim
    sl-input[
      label="Name"
      data-test-id="input-test"
    ]
  ```

  To test `sl-input` implemented with `ts_form_for`, add `data-test-id` to `input_html`:

  ```js
    = ts_form_for ... do |f|
      = f.input :input_name, 
        input_html: { 
          label: "Name",
          data: { 
            test_id: "input-test"
          } 
        }
  ```

  **Cypress commands for `sl-input`**

  To **type** in the input:
  ```js
    cy.slInputType(`[data-test-id="input-test"]`, "Your text here");
  ```

  To **check the input's value** (note the matcher `"have.value"`):
  ```js
    cy.get(`[data-test-id="input-test"]`).should("have.value", "Your text here");
  ```

  To **focus** on the input:
  ```js
    cy.slFocus(`[data-test-id="input-test"]`);
  ```

  To **clear** the input:
  ```js
    cy.slClear(`[data-test-id="input-test"]`);
  ```
---

## Examples

### Basic Input with Label

Use the `label` attribute to give the input an accessible label.

```html:preview
<sl-input label="Name"></sl-input>
```

```pug:slim
sl-input label="Name"
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :name,
    input_html: {
      label: "Name"
    }
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => <SlInput label="Name" />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help text that contains HTML, use the `help-text` slot instead.

```html:preview
<sl-input label="Previous legal names" help-text="List full names, separated by a semicolon"></sl-input>
<br />
<sl-input label="Previous legal names">
  <div slot="help-text">List <strong>full</strong> names, separated by a <strong>semicolon</strong></div>
</sl-input>
```

```pug:slim
sl-input[
  label="Previous legal names"
  help-text="List full names, separated by a semicolon"
]
br
sl-input label="Previous legal names"
  div slot="help-text"
    | List
    strong full
    | names, separated by a
    strong semicolon
```

```js:simple-form
/*
  — NOTE: Slots are not supported with ts_form_for —
*/
= ts_form_for ... do |f|
  = f.input :name,
    input_html: {
      label: "Previous legal  names",
      "help-text": "List full names, separated by a semicolon",
    }
```

```jsx:react
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => <SlInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Label with Tooltip

Use the `label-tooltip` attribute to add text that appears in a tooltip triggered by an info icon next to the label.

:::tip
**Usage:** Use a **label tooltip** to provide helpful but non-essential instructions or examples to guide people when filling in the input. Use **help text** to communicate instructions or requirements for filling in the input without errors.
:::

```html:preview
<sl-input label="Previous legal names" label-tooltip="Names previously used on official government documents, such as passport, driver license, or ID card" help-text="List full names, separated by a semicolon"></sl-input>
```

```pug:slim
sl-input[
  label="Previous legal names"
  label-tooltip="Names previously used on official government documents, such as passport, driver license, or ID card"
  help-text="List full names, separated by a semicolon"
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :name,
    input_html: {
      label: "Previous legal names",
      "label-tooltip": "Names previously used on official government documents, such as passport, driver license, or ID card",
      "help-text": "List full names, separated by a semicolon",
    }
```

```jsx:react
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => <SlInput label="What is your name?" />;
```

### Label with Context Note

Use the `context-note` attribute to add text that provides additional context or reference. For text that contains HTML, use the `context-note` slot. **Note:** On small screens the context note will wrap below the label if there isn't enough room next to the label.

:::tip
**Usage:** Use a **context note** to provide secondary contextual data, especially dynamic data, that would help people when filling in the input. Use **help text** to communicate instructions or requirements for filling in the input without errors.
:::

```html:preview
<sl-input type="currency" label="Amount" context-note="$10,000.29 available" help-text="You can transfer up to $2,500 per day" currency-as-cents=true></sl-input>
<br />
<sl-input type="currency" label="Amount" help-text="You can transfer up to $2,500 per day">
  <div slot="context-note"><strong>$10,000.29</strong> available</div>
</sl-input>
```

```pug:slim
sl-input[
  type="currency"
  label="Amount"
  context-note="$10,000.29 available"
  help-text="You can transfer up to $2,500 per day"
  currencyAsCents=true
]
br
sl-input[
  type="currency"
  label="Amount"
  help-text="You can transfer up to $2,500 per day"
]
  div slot="context-note"
    strong $10,000.29
    | available
```

```js:simple-form
/*
  — NOTE: Slots are not supported with ts_form_for —
*/
= ts_form_for ... do |f|
  = f.input :currency,
    input_html: {
      type: "currency",
      label: "Amount",
      "context-note": "$10,000.29 available",
      "help-text": "You can transfer up to $2,500 per day",
    }
```

```jsx:react
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => <SlInput label="What is your name?" />;
```

<!-- ### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<sl-input placeholder="Type something"></sl-input>
```

```pug:slim
sl-input placeholder="Type something"
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => <SlInput placeholder="Type something" />;
``` -->

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html:preview
<sl-input label="Clearable input" value="I can be cleared!" clearable></sl-input>
```

```pug:slim
sl-input[
  label="Clearable input"
  value="I can be cleared!"
  clearable=true
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :clearable_input,
    input_html: {
      label: "Clearable input",
      value: "I can be cleared!",
      clearable: true,
    }
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => <SlInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html:preview
<sl-input type="password" label="Password" password-toggle></sl-input>
```

```pug:slim
sl-input[
  type="password"
  label="Password"
  password-toggle=true
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :password_toggle,
    input_html: {
      label: "Password",
      type: "password",
      "password-toggle": true,
    }
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => <SlInput type="password" placeholder="Password Toggle" size="medium" password-toggle />;
```

<!-- ### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html:preview
<sl-input placeholder="Type something" filled></sl-input>
```

```pug:slim
sl-input placeholder="Type something" filled=true
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => <SlInput placeholder="Type something" filled />;
``` -->

### Disabled

Use the `disabled` attribute to disable an input.

```html:preview
<sl-input label="Disabled input" disabled></sl-input>
```

```pug:slim
sl-input[
  label="Disabled input"
  disabled=true
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :disabled_input,
    input_html: {
      label: "Disabled input",
      disabled: true,
    }
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => <SlInput placeholder="Disabled" disabled />;
```

### Sizes

Use the `size` attribute to change an input's size. Size `medium` is the input's default.

:::warning
**Note:** Size `small` is currently not part of the Teamshares Design System, and there is no Figma component for this option. Please check with the design team before using this option.
:::

```html:preview
<sl-input label="Medium input"></sl-input>
<br />
<sl-input label="Large input" size="large"></sl-input>
```

```pug:slim
sl-input label="Medium input"
br
sl-input[
  label="Large input"
  size="large"
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :medium_input,
    input_html: {
      label: "Medium input"
    }
  = f.input :large_input,
    input_html: {
      label: "Large input",
      size: "large",
    }
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => (
  <>
    <SlInput placeholder="Small" size="small" />
    <br />
    <SlInput placeholder="Medium" size="medium" />
    <br />
    <SlInput placeholder="Large" size="large" />
  </>
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

:::warning
**Note:** Pill inputs are not a standard input pattern in our Design System, and there is no Figma component for this option. Please check with the design team before using this option.
:::

```html:preview
<sl-input label="Medium pill" pill></sl-input>
<br />
<sl-input label="Large pill" size="large" pill></sl-input>
```

```pug:slim
sl-input[
  label="Medium pill"
  pill=true
]
br
sl-input[
  label="Large pill"
  size="large"
  pill=true
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :medium_pill,
    input_html: {
      label: "Medium pill",
      pill: true,
    }
  = f.input :large_pill,
    input_html: {
      label: "Large pill",
      size: "large"
      pill: true,
    }
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => (
  <>
    <SlInput placeholder="Small" size="small" pill />
    <br />
    <SlInput placeholder="Medium" size="medium" pill />
    <br />
    <SlInput placeholder="Large" size="large" pill />
  </>
);
```

### Currency Input

Use `type='currency'` to display an input designed for currency values. This input auto-formats the value with a thousands separator as the user types and displays a <code>$</code> prefix and <code>USD</code> suffix. Input only allows numbers and one `.`

By default, the currency input stores the raw user-entered value. Set `currency-as-cents=true` to store the value as cents (e.g. If the user enters `4` for $4.00 USD, the input will store `400`.)

```html:preview
<sl-input id="currency-default" type="currency" label="Currency, default stored value"><div id="display-default" slot="help-text">Input stores the user’s input/raw value: Start typing to see stored value</div></sl-input>

<br />
<sl-input id="currency-as-cents" type="currency" label="Currency with 'currency-as-cents=true'" currency-as-cents=true><div id="display-cents" slot="help-text">Input stores the raw value converted to cents: Start typing to see stored value</div></sl-input>


<script type="module">
  const currencyDefault = document.getElementById('currency-default');
  const displayDefault = document.getElementById('display-default');
  const currencyAsCents = document.getElementById('currency-as-cents');
  const displayCents = document.getElementById('display-cents');

  currencyDefault.addEventListener('sl-input', () => {
    displayDefault.textContent = `Input stores the user’s input/raw value: ${currencyDefault.value}`;
  });

  currencyAsCents.addEventListener('sl-input', () => {
    displayCents.textContent = `Input stores the raw value converted to cents: ${currencyAsCents.value}`;
  });
</script>
```

```pug:slim
sl-input[
  id="currency-default"
  type="currency"
  label="Currency, default stored value"
]
  div[
    id="display-default"
    slot="help-text"
  ]
    | Input stores the user’s input/raw value: Start typing to see stored value
br
sl-input[
  id="currency-as-cents"
  type="currency"
  label="Currency, with 'currency-as-cents=true'"
  currency-as-cents=true
]
  div[
    id="display-cents"
    slot="help-text"
  ]
    | Input stores the raw value converted to cents: Start typing to see stored value

javascript:
  const currencyDefault = document.getElementById('currency-default');
  const displayDefault = document.getElementById('display-default');
  const currencyAsCents = document.getElementById('currency-as-cents');
  const displayCents = document.getElementById('display-cents');

  currencyDefault.addEventListener('sl-input', () => {
    displayDefault.textContent = `Input stores the user’s input/raw value: ${currencyDefault.value}`;
  });

  currencyAsCents.addEventListener('sl-input', () => {
    displayCents.textContent = `Input stores the raw value converted to cents: ${currencyAsCents.value}`;
  });
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :currency_default,
    input_html: {
      type: "currency",
      label: "Currency, default stored value",
      "help-text": "Input stores the user’s input/raw value: Start typing to see stored value",
    }
  = f.input :currency_cents,
    input_html: {
      type: "currency",
      label: "Currency with 'currency-as-cents=true'",
      "currency-as-cents": true,
      "help-text": "Input stores the raw value converted to cents: Start typing to see stored value",
    }
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => (
  <>
    <SlInput type="email" placeholder="Email" />
    <br />
    <SlInput type="number" placeholder="Number" />
    <br />
    <SlInput type="date" placeholder="Date" />
  </>
);
```

### Date Input

Use `type='date'` to display the browser-default date input with a custom calendar icon. The calendar icon opens the browser-default date picker.

```html:preview
<sl-input type="date" label="Date" placeholder="Date" help-text="Calendar icon opens the browser-default date picker"></sl-input>
```

```pug:slim
sl-input[
  type="date"
  label="Date"
  placeholder="Date"
  help-text="Calendar icon opens the browser-default date picker"
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :date,
    input_html: {
      type: "date",
      label: "Date",
      "help-text": "Calendar icon opens the browser-default date picker",
    }
```

### Percentage Input

Use `type='percentage'` to add a `%` suffix to the input and set the native `<input>` type to `number`. The percentage input has no auto-formatting or input masking.

```html:preview
<sl-input type="percentage" label="Percentage" help-text="The percentage input has no auto-formatting or input masking"></sl-input>
```

```pug:slim
sl-input[
  type="percentage"
  label="Percentage"
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :percentage,
    input_html: {
      type: "percentage",
      label: "Percentage",
    }
```

### Number Input

Use `type='number'` to display a plain number input.

By default the number input will display the browser’s built-in increment/decrement spin buttons. Use `no-spin-buttons=true` to hide the spin buttons.

```html:preview
<sl-input type="number" label="Number"></sl-input>
<br />
<sl-input type="number" label="Number with 'no-spin-buttons=true'" no-spin-buttons>
    <div slot="help-text">Use the <code>no-spin-buttons</code> attribute to hide the browser's default increment/decrement buttons</div>
</sl-input>
```

```pug:slim
sl-input[
  type="number"
  label="Number"
]
br
sl-input[
  type="number"
  label="Number with 'no spin buttons=true'"
  help-text="Use the 'no-spin-buttons' attribute to hide the browser's default increment/decrement buttons"
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :number,
    input_html: {
      type: "number",
      label: "Number",
    }
  = f.input :number_no_spin_buttons,
    input_html: {
      type: "number",
      label: "Number with 'no-spin-buttons=true'",
      "help-text": "Use the 'no-spin-buttons' attribute to hide the browser's default increment/decrement buttons",
    }
```

### Search Input

Use `type='search'` to add a magnifying glass prefix icon to the input. Use the `clearable` attribute to make the search input clearable.

```html:preview
<sl-input type="search" label="Search with `clearable=true'" clearable><div slot="help-text">Use the <code>clearable</code> attribute to make the input clearable</div></sl-input>
```

```pug:slim
sl-input[
  type="search"
  label="Search with `clearable=true'"
  clearable=true
  help-text="Use the 'clearable' attribute to make the input clearable"
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :search,
    input_html: {
      type: "search",
      label: "Search with `clearable=true'",
      "help-text": "Use the 'clearable' attribute to make the input clearable",
    }
```

### Other Input Types

Other available input types are: `email`, `tel`, `datetime-local`, `time`, and `url`. See the [Properties table](#properties) for the full list of `type` options.

Use the `optional-icon` attribute to automatically display an envelope or phone prefix icon with `email` and `tel` inputs. These inputs currently have no auto-formatting or input masking.

```html:preview
<sl-input type="email" label="Email input">
  <div slot="help-text">Has no icon by default</div>
</sl-input>
<br />
<sl-input type="email" label="Email input with 'optional-icon=true'" optional-icon>
  <div slot="help-text">Use the <code>optional-icon</code> attribute to display an envelope prefix icon</div>
</sl-input>
<br />
<sl-input type="tel" label="Tel input">
  <div slot="help-text">Has no icon by default</div>
</sl-input>
<br />
<sl-input type="tel" label="Tel input with 'optional-icon-true'" optional-icon>
  <div slot="help-text">Use the <code>optional-icon</code> attribute to display a phone prefix icon</div>
</sl-input>
```

```pug:slim
sl-input[
  type="email"
  label="Email input"
  help-text="Has no icon by default"
]
br
sl-input[
  type="email"
  label="Email input with 'optional-icon=true'"
  optional-icon=true
  help-text="Use the 'optional-icon' attribute to display an envelope prefix icon"
]
br
sl-input[
  type="tel"
  label="Tel input"
  help-text="Has no icon by default"
]
br
sl-input[
  type="tel"
  label="Tel input with 'optional-icon=true'"
  optional-icon=true
  help-text="Use the 'optional-icon' attribute to display a phone prefix icon"
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :email,
    input_html: {
      label: "Email input",
      type: "email",
      "help-text": "Has no icon by default",
    }
  = f.input :email_with_icon,
    input_html: {
      label: "Email input with 'optional-icon=true'",
      type: "email",
      "optional-icon": true,
      "help-text": "Use the 'optional-icon' attribute to display an envelope prefix icon",
    }
  = f.input :tel,
    input_html: {
      label: "Tel input",
      type: "tel",
      "help-text": "Has no icon by default",
    }
  = f.input :tel_with_icon,
    input_html: {
      label: "Tel input with 'optional-icon=true'",
      type: "tel",
      "optional-icon": true,
      "help-text": "Use the 'optional-icon' attribute to display a phone prefix icon",
    }
```

```jsx:react
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => (
  <>
    <SlInput type="email" placeholder="Email" />
    <br />
    <SlInput type="number" placeholder="Number" />
    <br />
    <SlInput type="date" placeholder="Date" />
  </>
);
```

### Prefix & Suffix Icons

Several input types have specific `prefix` and `suffix` elements or icons that are displayed by default. You can also use the `prefix` and `suffix` slots to add icons or text elements to inputs for other use cases.

Follow these general guidelines when adding prefix and suffix icons to the input:

- Use the `sl-icon` component
- Use `library="fa"` (our default Font Awesome icon set)
- Use the `Regular` icon style, which means you don't need to add a `fas-` or other prefix to the icon name
  - See [icons sets](/components/icon/#icon-sets) for more about Font Awesome icon styles
- In general **don't** resize icons or change their color from the default already set by the `sl-input` component

:::warning
**Note:** `ts_form_for` doesn't support slots, so custom prefix and suffix icons cannot be added when rendering `sl-input` with `ts_form_for`.

However, input types `currency`, `date`, `percentage` and `search` **display icons by default**, and the `optional-icon` attribute can be set to `true` to display default prefix icons for input types `email` and `tel`.
:::

```html:preview
<sl-input label="Prefix icon example: DO">
  <sl-icon name="rocket-launch" library="fa" slot="prefix"></sl-icon>
</sl-input>
<br />
<sl-input label="Prefix icon example: DON'T">
  <sl-icon name="fad-rocket-launch" library="fa" style="font-size: 1.25rem; color:mediumaquamarine;" slot="prefix"></sl-icon>
</sl-input>
<br />
<sl-input label="Prefix icon example: POSSIBLE EXCEPTION" help-text="An icon that is hard to read at the default size" value="Input text, default alignment">
  <sl-icon name="user-magnifying-glass" library="fa" slot="prefix"></sl-icon>
</sl-input>
<br />
<sl-input label="Prefix icon example: RESIZED" help-text="Same icon as above, resized. Note that a larger prefix or suffix icon will push the input text out of alignment." value="Input text, shifted 4px right due to icon size">
  <sl-icon name="user-magnifying-glass" library="fa" style="font-size: 1.25rem;" slot="prefix"></sl-icon>
</sl-input>
```

```pug:slim
sl-input label="Prefix icon example: DO"
  sl-icon[
    name="rocket-launch"
    library="fa"
    slot="prefix"
  ]
br
sl-input label="Prefix icon example: DON'T"
  sl-icon[
    name="fad-rocket-launch"
    library="fa"
    style="font-size: 1.25rem; color:mediumaquamarine;"
    slot="prefix"
  ]
br
sl-input[
  label="Prefix icon example: POSSIBLE EXCEPTION"
  help-text="An icon that is hard to read at the default size."
  value="Input text, default alignment"
]
  sl-icon[
    name="user-magnifying-glass"
    library="fa"
    slot="prefix"
  ]
br
sl-input[
  label="Prefix icon example: RESIZED"
  help-text="Same icon as above, resized. Note that a larger prefix or suffix icon will push the input text out of alignment."
  value="Input text, shifted 4px right due to icon size"
]
  sl-icon[
    name="user-magnifying-glass"
    library="fa"
    style="font-size: 1.25rem;"
    slot="prefix"
  ]
```

```js:simple-form
/*
  NOTE: `ts_form_for` doesn't support slots, so prefix and suffix icons
  cannot be added when rendering `sl-input` with `ts_form_for`.

  However, input types `currency`, `date`, `percentage`, and `search`
  display icons by default, and the `optional-icon` attribute can be
  set to `true` to display default prefix icons for input types `email` and `tel`.
*/
```

```jsx:react
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => (
  <>
    <SlInput placeholder="Small" size="small">
      <SlIcon name="home" slot="prefix"></SlIcon>
      <SlIcon name="chat-bubble-bottom-center-text" slot="suffix"></SlIcon>
    </SlInput>
    <br />
    <SlInput placeholder="Medium" size="medium">
      <SlIcon name="home" slot="prefix"></SlIcon>
      <SlIcon name="chat-bubble-bottom-center-text" slot="suffix"></SlIcon>
    </SlInput>
    <br />
    <SlInput placeholder="Large" size="large">
      <SlIcon name="home" slot="prefix"></SlIcon>
      <SlIcon name="chat-bubble-bottom-center-text" slot="suffix"></SlIcon>
    </SlInput>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

:::warning
**Note:** Alternate label positions are not a pattern in our Design System, and there is no Figma component for this option. Please check with the design team before using this option.
:::

```html:preview
<sl-input class="label-on-left" label="Name" help-text="Enter your name"></sl-input>
<sl-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></sl-input>
<sl-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></sl-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--sl-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--sl-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```

```pug:slim
sl-input.label-on-left[
  label="Name"
  help-text="Enter your name"
]
sl-input.label-on-left[
  label="Email"
  type="email"
  help-text="Enter your email"
]
sl-textarea.label-on-left[
  label="Bio"
  help-text="Tell us something about yourself"
]

css:
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--sl-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--sl-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :name,
    input_html: {
      label: "Name",
      "help-text": "Enter your name",
      class: "label-on-left",
    }
  = f.input :name,
    input_html: {
      label: "Email",
      type: "email",
      "help-text": "Enter your email",
      class: "label-on-left",
    }
  = f.input :name,
    as: :text,
    input_html: {
      label: "Bio",
      "help-text": "Tell us something about yourself",
      class: "label-on-left",
    }

css:
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--sl-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--sl-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
```
