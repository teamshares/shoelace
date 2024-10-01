---
meta:
  title: Textarea
  description: Textareas collect data from the user and allow multiple lines of text.
layout: component
unusedProperties: |
  - Sizes `small`, `large`
  - Boolean `filled`
guidelines: |
  - For additional guidelines on textarea **labels**, **help text**, **label tooltip**, **context note**, and **placeholder text**, refer to the [Input component usage guidelines](/components/input/#usage-guidelines)
testing: |
  ### With Cypress

  **Adding `data-test-id` to a component**

   To test `<sl-textarea>`, add the `data-test-id` attribute directly to the component:

  ```pug:slim
    sl-textarea[
      label="Bio"
      data-test-id="textarea-test"
    ]
  ```

  To test `<sl-textarea>` implemented with `ts_form_for`, add `data-test-id` to `input_html`:

  ```js
    = ts_form_for ... do |f|
      = f.input :textarea_name, 
        as: :text,
        input_html: { 
          label: "Bio",
          data: { 
            "test_id": "textarea-test"
          } 
        }
  ```

  **Cypress commands for `<sl-textarea>`**

  To **type** in the textarea:
  ```js
    cy.slTextAreaType(`[data-test-id="textarea-test"]`, "This is long text to type into the textarea for testing.");
  ```

  To **get the textarea's value** (note the matcher `"have.value"`):
  ```js
    cy.get(`[data-test-id="textarea-test"]`).should("have.value", "This is the long text value we want the textarea to have.");
  ```

  To **focus** on the textarea:
  ```js
    cy.slFocus(`[data-test-id="textarea-test"]`);
  ```

  To **clear** the textarea:
  ```js
    cy.slTextAreaClear(`[data-test-id="textarea-test"]`);
  ```
---

## Examples

### Basic Textarea with Label

Use the `label` attribute to give the textarea an accessible label.

```html:preview
<sl-textarea label="Month in review"></sl-textarea>
```

```pug:slim
sl-textarea label="Month in review"
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :month_in_review,
    as: :text,
    input_html: {
      label: "Month in review"
    }
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help text that contains HTML, use the `help-text` slot instead.

```html:preview
<sl-textarea label="Month in review" help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies."> </sl-textarea>
<br />
<sl-textarea label="Month in review">
  <div slot="help-text">Tell us the highlights. Be sure to include details about any financial performance <strong>anomalies</strong>.</div>
</sl-textarea>
```

```pug:slim
sl-textarea[
  label="Month in review"
  help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies."
]
br
sl-textarea label="Month in review"
  div slot="help-text"
    | Tell us the highlights. Be sure to include details about any financial performance
    strong anomalies
    | .
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :month_in_review,
    as: :text,
    input_html: {
      label: "Month in review",
      "help-text": "Tell us the highlights. Be sure to include details about any financial performance anomalies.",
    }
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Label with Tooltip

Use the `label-tooltip` attribute to add text that appears in a tooltip triggered by an info icon next to the label.

:::tip
**Usage:** Use the **label tooltip** to provide helpful but non-essential instructions or examples to guide people when filling in the textarea. Use **help text** to communicate instructions or requirements for filling in the textarea without errors.
:::

```html:preview
<sl-textarea label="Month in review" help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies." label-tooltip="There is no required format for this commentary. However, we suggest covering the following topics: 1) Revenue, 2) COGS, 3) Gross profit, and 4) Operating expenses."></sl-textarea>
```

```pug:slim
sl-textarea[
  label="Month in review"
  help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies."
  label-tooltip="There is no required format for this commentary. However, we suggest covering the following topics: 1) Revenue, 2) COGS, 3) Gross profit, and 4) Operating expenses."
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :month_in_review,
    as: :text,
    input_html: { \
      label: "Month in review",
      "help-text": "Tell us the highlights. Be sure to include details about any financial performance anomalies.",
      "label-tooltip": "There is no required format for this commentary. However, we suggest covering the following topics: 1) Revenue, 2) COGS, 3) Gross profit, and 4) Operating expenses.",
    }
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea label="Comments" />;
```

### Label with Context Note

Use the `context-note` attribute to add text that provides additional context or reference. For text that contains HTML, use the `context-note` slot. **Note:** On small screens the context note will wrap below the label if there isn't enough room next to the label.

:::tip
**Usage:** Use a **context note** to provide secondary contextual data, especially dynamic data, that would help people when filling in the textarea. Use **help text** to communicate instructions or requirements for filling in the textarea without errors.
:::

```html:preview
<sl-textarea label="Month in review" help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies." context-note="Data synced 1 hr ago"></sl-textarea>
```

```pug:slim
sl-textarea[
  label="Month in review"
  help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies."
  context-note="Data synced 1 hr ago"
]
```

```js:simple-form
/*
  — NOTE: Slots are not supported with ts_form_for —
*/
= ts_form_for ... do |f|
  = f.input :month_in_review,
    as: :text,
    input_html: { \
      label: "Month in review",
      "help-text": "Tell us the highlights. Be sure to include details about any financial performance anomalies.",
      "context-note": "Data synced 1 hr ago",
    }
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea label="Comments" />;
```

### Rows

Use the `rows` attribute to change the number of text rows that the textarea shows before the text starts to overflow and the textarea scrolls.

```html:preview
<sl-textarea label="Textarea with 2 rows" rows="2"></sl-textarea>
<br />
<sl-textarea label="Textarea with 4 rows (Default)" rows="4"></sl-textarea>
<br />
<sl-textarea label="Textarea with 6 rows" rows="6"></sl-textarea>
```

```pug:slim
sl-textarea[
  label="Textarea with 2 rows"
  rows="2"
]
br
sl-textarea[
  label="Textarea with 4 rows (Default)"
  rows="4"
]
br
sl-textarea[
  label="Textarea with 6 rows"
  rows="6"
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :rows_2,
    as: :text,
    input_html: {
      label: "Textarea with 2 rows",
      rows: "2",
    }
  = f.input :rows_4,
    as: :text,
    input_html: {
      label: "Textarea with 4 rows (Default)",
      rows: "4",
    }
  = f.input :rows_6,
    as: :text,
    input_html: {
      label: "Textarea with 6 rows",
      rows: "6",
    }
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea rows={2} />;
```

<!-- ### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<sl-textarea placeholder="Type something"></sl-textarea>
```

```pug:slim
sl-textarea placeholder="Type something"
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html:preview
<sl-textarea placeholder="Type something" filled></sl-textarea>
```

```pug:slim
sl-textarea placeholder="Type something" filled="true"
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea placeholder="Type something" filled />;
``` -->

### Disabled

Use the `disabled` attribute to disable a textarea.

```html:preview
<sl-textarea label="Disabled textarea" disabled></sl-textarea>
```

```pug:slim
sl-textarea[
  label="Disabled textarea"
  disabled="true"
]
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :disabled_textarea,
    as: :text,
    input_html: {
      label: "Disabled textarea",
      disabled: true,
    }
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea placeholder="Textarea" disabled />;
```

<!-- ### Sizes

Use the `size` attribute to change a textarea's size.

```html:preview
<sl-textarea placeholder="Small" size="small"></sl-textarea>
<br />
<sl-textarea placeholder="Medium" size="medium"></sl-textarea>
<br />
<sl-textarea placeholder="Large" size="large"></sl-textarea>
```

```pug:slim
sl-textarea placeholder="Small" size="small"
br
sl-textarea placeholder="Medium" size="medium"
br
sl-textarea placeholder="Large" size="large"
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => (
  <>
    <SlTextarea placeholder="Small" size="small"></SlTextarea>
    <br />
    <SlTextarea placeholder="Medium" size="medium"></SlTextarea>
    <br />
    <SlTextarea placeholder="Large" size="large"></SlTextarea>
  </>
);
``` -->

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html:preview
<sl-textarea label="Textarea with no resizing" resize="none"></sl-textarea>
```

```pug:slim
sl-textarea[
  label="Textarea with no resizing"
  resize="none"
]
```

```js:simple-form
/*
  — NOTE: In ts_form_for resize="auto" is the default —
  — Use resize="vertical" to match the Shoelace default —
*/
= ts_form_for ... do |f|
  = f.input :no_resizing,
    as: :text,
    input_html: {
      label: "Textarea with no resizing",
      resize: "none",
    }
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

:::warning
**Note:** If using `ts_form_for`, note that the default `resize` option is already set to `auto`. To match the `sl-textarea` default of `vertical`, set `resize: "vertical"` in `input_html` (see code example below).
:::

```html:preview
<sl-textarea label="Expanding textarea" resize="auto" value="Someone’s sitting in the shade today because someone planted a tree a long time ago. ... Keep typing to see the textarea expand..." rows="2"></sl-textarea>
```

```pug:slim
sl-textarea[
  label="Expanding textarea"
  resize="auto"
  value="Someone’s sitting in the shade today because someone planted a tree a long time ago. ... Keep typing to see the textarea expand..."
  rows="2"
]
```

```js:simple-form
/*
  — NOTE: In ts_form_for resize="auto" is the default —
  — Use resize="vertical" to match the Shoelace default —
*/
= ts_form_for ... do |f|
  = f.input :expanding,
    as: :text,
    input_html: {
      label: "Textarea with no resizing",
      label: "Expanding textarea",
      resize: "auto",
      value: "Someone’s sitting in the shade today because someone planted a tree a long time ago. ... Keep typing to see the textarea expand...",
      rows: "2",
    }
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea resize="auto" />;
```
