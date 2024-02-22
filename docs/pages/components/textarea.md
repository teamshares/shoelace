---
meta:
  title: Textarea
  description: Textareas collect data from the user and allow multiple lines of text.
layout: component
unusedProperties: |
  - Sizes `small`, `large`
  - Boolean `filled`
guidelines: |
  ### Labels, Help Text, Placeholder, etc.
  - For additional guidelines on textarea **labels**, **help text**, **label tooltip**, **context note**, and **placeholder text**, refer to the [Input component usage guidelines](/components/input/#labels)
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
sl-textarea label="Month in review" help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies."
br
sl-textarea label="Month in review"
  div slot="help-text"
    | Tell us the highlights. Be sure to include details about any financial performance
    strong anomalies
    | .
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Label with Tooltip

Use the `label-tooltip` attribute to add text that appears in a tooltip triggered by an info icon next to the label.

:::tip
**Usage:** Use the **label tooltip** to provide helpful but non-essential instructions or examples to guide the user when filling in the textarea. Use **help text** to communicate instructions or requirements for filling in the textarea without errors.
:::

```html:preview
<sl-textarea label="Month in review" help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies." label-tooltip="There is no required format for this commentary. However, we suggest covering the following topics: 1) Revenue, 2) COGS, 3) Gross profit, and 4) Operating expenses."></sl-textarea>
```

```pug:slim
sl-textarea[label="Month in review" help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies." label-tooltip="There is no required format for this commentary. However, we suggest covering the following topics: 1) Revenue, 2) COGS, 3) Gross profit, and 4) Operating expenses."]
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea label="Comments" />;
```

### Label with Context Note

Use the `context-note` attribute to add text that provides additional context or reference. For text that contains HTML, use the `context-note` slot. **Note:** On small screens the context note will wrap below the label if there isn't enough room next to the label.

:::tip
**Usage:** Use a **context note** to provide secondary contextual data, especially dynamic data, that would help the user when filling in the textarea. Use **help text** to communicate instructions or requirements for filling in the textarea without errors.
:::

```html:preview
<sl-textarea label="Month in review" help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies." context-note="Data synced 1 hr ago"></sl-textarea>
```

```pug:slim
sl-textarea[label="Month in review" help-text="Tell us the highlights. Be sure to include details about any financial performance anomalies." context-note="Data synced 1 hr ago"]
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
sl-textarea label="Textarea with 2 rows" rows="2"
br
sl-textarea label="Textarea with 4 rows (Default)" rows="4"
br
sl-textarea label="Textarea with 6 rows" rows="6"
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
sl-textarea label="Disabled textarea" disabled="true"
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
sl-textarea label="Textarea with no resizing" resize="none"
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html:preview
<sl-textarea label="Expanding textarea" resize="auto" value="Someone’s sitting in the shade today because someone planted a tree a long time ago. ... Keep typing to see the textarea expand..." rows="2"></sl-textarea>
```

```pug:slim
sl-textarea label="Expanding textarea" resize="auto" value="Someone’s sitting in the shade today because someone planted a tree a long time ago. ... Keep typing to see the textarea expand..." rows="2"
```

```jsx:react
import SlTextarea from '@teamshares/shoelace/dist/react/textarea';

const App = () => <SlTextarea resize="auto" />;
```
