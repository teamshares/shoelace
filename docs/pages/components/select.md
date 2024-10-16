---
meta:
  title: Select
  description: Selects allow you to choose items from a menu of predefined options.
layout: component
unusedProperties: |
  - Size `small`
  - Booleans `filled`, `pill`
guidelines: |
  ### When to Use a Select
  - When presenting **more than 7** options for people to choose from
  - When you **don't have enough space** to present all the options
  - Most commonly, when you want people to **choose just one** option

  ### When to Use Something Else
  - **Use a [radio group](/components/radio-group) instead** if presenting fewer than 5 to 7 options and you want to let people choose just **one** option
  - **Use a [checkbox group](/components/checkbox-group) instead** if presenting fewer than 5 to 7 options and you want to let people choose **multiple** options

  ### Placeholder Text and Default Selections
  - **Don't use placeholder text** in a select, even to create a default non-selectable option that serves as a hint (e.g. "Select an option")
  - If you need to allow people to **clear their selection**, include an empty (no value) option to serve as the default "empty" option
  - Whenever possible, set a **default selection** that makes sense for the use case and context

  ### Using the Multi-select Option
  - **Use the multi-select option sparingly.** Selects that allow people to choose multiple options are not as common, and people often don't realize that they can choose more than one option.
  - Consider whether a checkbox group would create a more straightforward experience
  - If you are opting to use the multi-select option, be sure to include a clear button using the `clearable` attribute, so that people can easily clear their selections

  ### Labels, Help Text, Placeholder, Etc.
  - For additional guidelines on select **labels**, **help text**, **label tooltip**, **context note**, and **placeholder text**, refer to the [Input component usage guidelines](/components/input/#usage-guidelines)
testing: |
  ### With Cypress

  **Adding `data-test-id` to a component**

   To test `sl-select`, add the `data-test-id` attribute directly to the component:

  ```pug:slim
    sl-select[
      label="Select an option"
      data-test-id="select-test"
    ]
      sl-option value="option-1" Option 1
      sl-option value="option-2" Option 2
      sl-option value="option-3" Option 3
  ```

  To test `sl-select` implemented with `ts_form_for`, add `data-test-id` to `input_html`:

  ```js
    = ts_form_for ... do |f|
      = f.input :select_name, 
        collection: [
          ["Option 1", :option-1],
          ["Option 2", :option-2],
          ["Option 3", :option-3],
        ],      
        input_html: { 
          label: "Select an option",
          data: { 
            test_id: "select-test"
          } 
        }
  ```

  **Cypress commands for `sl-select`**

  To **select** an option:
  ```js
    cy.slSelectByOptionText(`[data-test-id="select-test"]`, "Option 1");
  ```

  To verify an option **is selected**:
  ```js
    cy.slSelectValue(`[data-test-id="select-text"]`).should("equal", "option-1");
  ```

  To verify an option **is NOT selected**:
  ```js
    cy.slSelectValue(`[data-test-id="select-text"]`).should("not.equal", "option-2");
  ```
---

## Examples

### Basic Select with Label

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<sl-select label="Select one option">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
```

```pug:slim
sl-select label="Select one option"
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :select_one,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Select one option"
    }
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSelect>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<sl-select label="Skill level" help-text="Select one option that best describes your current skill level">
  <sl-option value="1">Novice</sl-option>
  <sl-option value="2">Intermediate</sl-option>
  <sl-option value="3">Advanced</sl-option>
  <sl-option value="4">Expert</sl-option>
</sl-select>
<br>
<sl-select label="Skill level">
  <sl-option value="1">Novice</sl-option>
  <sl-option value="2">Intermediate</sl-option>
  <sl-option value="3">Advanced</sl-option>
  <sl-option value="4">Expert</sl-option>
  <div slot="help-text">Select one option that best describes your <strong>current</strong> skill level</div>
</sl-select>
```

```pug:slim
sl-select[
  label="Skill level"
  help-text="Select one option that best describes your current skill level"
]
  sl-option value="1" Novice
  sl-option value="2" Intermediate
  sl-option value="3" Advanced
  sl-option value="4" Expert
br
sl-select[
  label="Skill level"
]
  sl-option value="1" Novice
  sl-option value="2" Intermediate
  sl-option value="3" Advanced
  sl-option value="4" Expert
  div slot="help-text"
    | Select one option that best describes your
    strong current
    | skill level
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :skill_level,
    collection: [
      ["Novice", "1"],
      ["Intermediate", "2"],
      ["Advanced", "3"],
      ["Expert", "4"],
    ],
    input_html: {
      label: "Skill level",
      "help-text": "Select one option that best describes your current skill level",
    }
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect label="Experience" help-text="Please tell us your skill level.">
    <SlOption value="1">Novice</SlOption>
    <SlOption value="2">Intermediate</SlOption>
    <SlOption value="3">Advanced</SlOption>
  </SlSelect>
);
```

### Label with Tooltip

Use the `label-tooltip` attribute to add text that appears in a tooltip triggered by an info icon next to the label.

:::tip
**Usage:** Use a **label tooltip** to provide helpful but non-essential instructions or examples to guide people when selecting an option. Use **help text** to communicate instructions or requirements for choosing an option without errors.
:::

```html:preview
<sl-select label="Skill level" label-tooltip="Although skill doesn't always map to years of experience, the following is a general guide: Novice (Less than 1 year); Intermediate (1-2 years); Advanced (3-5 years); Expert (5+ years)" help-text="Select one option that best describes your current skill level">
  <sl-option value="1">Novice</sl-option>
  <sl-option value="2">Intermediate</sl-option>
  <sl-option value="3">Advanced</sl-option>
  <sl-option value="4">Expert</sl-option>
</sl-select>
```

```pug:slim
sl-select[
  label="Skill level"
  label-tooltip="Although skill doesn't always map to years of experience, the following can be used as a general guide: Novice (Less than 1 year); Intermediate (1-2 years); Advanced (3-5 years); Expert (5+ years)"
]
  sl-option value="1" Novice
  sl-option value="2" Intermediate
  sl-option value="3" Advanced
  sl-option value="4" Expert
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :skill_level,
    collection: [
      ["Novice", "1"],
      ["Intermediate", "2"],
      ["Advanced", "3"],
      ["Expert", "4"],
    ],
    input_html: {
      label: "Skill level",
      "label-tooltip": "Although skill doesn't always map to years of experience, the following can be used as a general guide: Novice (Less than 1 year); Intermediate (1-2 years); Advanced (3-5 years); Expert (5+ years)",
    }
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect label="Select one">
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Label with Context Note

Use the `context-note` attribute to add text that provides additional context or reference. For text that contains HTML, use the `context-note` slot. **Note:** On small screens the context note will wrap below the label if there isn't enough room next to the label.

:::tip
**Usage:** Use a **context note** to provide secondary contextual data, especially dynamic data, that would help people when choosing an option. Use **help text** to communicate instructions or requirements for choosing an option without errors.
:::

```html:preview
<sl-select label="Skill level" help-text="Select one option that best describes your current skill level">
  <div slot="context-note"><a href="javascript;" class="ts-text-link">See open positions by skill level</a></div>
  <sl-option value="1">Novice</sl-option>
  <sl-option value="2">Intermediate</sl-option>
  <sl-option value="3">Advanced</sl-option>
  <sl-option value="4">Expert</sl-option>
</sl-select>
```

```pug:slim
sl-select[
  label="Skill level"
  help-text="Select one option that best describes your current skill level"
]
  div slot="context-note"
    a href="javascript;" class="ts-text-link" See open positions by skill level
  sl-option value="1" Novice
  sl-option value="2" Intermediate
  sl-option value="3" Advanced
  sl-option value="4" Expert
```

```js:simple-form
/*
  — NOTE: Slots are not supported with ts_form_for —
  — Example below shows usage of "context-note" as attribute —
*/
= ts_form_for ... do |f|
  = f.input :skill_level,
    collection: [
      ["Novice", "1"],
      ["Intermediate", "2"],
      ["Advanced", "3"],
      ["Expert", "4"],
    ],
    input_html: {
      label: "Skill level",
      "help-text": "Select one option that best describes your current skill level",
      // Example of `context-note` attribute; slots not supported with ts_form_for
      "context-note": "5 open positions",
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
<sl-select placeholder="Select one">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-select>
```

```pug:slim
sl-select placeholder="Select one"
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect placeholder="Select one">
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
``` -->

### Clearable

Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.

:::tip
**Usage:** Add a clear button only when **multiple** options can be selected. For the default single-choice use case (the most common for selects), include an empty option that people can select to "clear" the current selection.
:::

```html:preview
<sl-select label="Clearable multi-choice select" clearable multiple value="option-1 option-2" help-text="For multi-choice selects only, display an icon button to let people clear their selections">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
<br />
<sl-select label="Clearable single-choice select" help-text="Add an empty value option to allow people to clear their selection in a single-choice select">
  <sl-option value=""></sl-option>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
```

```pug:slim
sl-select[
  label="Clearable multi-choice select"
  clearable=true
  multiple=true
  value="option-1 option-2"
  help-text="For multi-choice selects only, display an icon button to let people clear their selections"
]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
br
sl-select[
  label="Clearable single-choice select"
  help-text="Add an empty value option to allow people to clear their selection in a single-choice select"
]
  sl-option value=""
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :clearable_multiple,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Clearable multi-choice select",
      clearable: true,
      multiple: true,
      value: "option-1 option-2",
      "help-text": "For multi-choice selects only, display an icon button to let people clear their selections",
    }
  = f.input :clearable_single,
    collection: [
      ["", ""],
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Clearable single-choice select",
      "help-text": "Add an empty value option to allow people to clear their selection in a single-choice select",
    }
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect placeholder="Clearable" clearable>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

<!-- ### Filled Selects

Add the `filled` attribute to draw a filled select.

```html:preview
<sl-select filled>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
</sl-select>
```

```pug:slim
sl-select filled=true
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect filled>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
``` -->

### Pill

Use the `pill` attribute to give selects rounded edges.

:::warning
**Note:** Pill-shaped selects are not a standard pattern in our Design System, and there is no Figma component for this option. Please check with the design team before using this option.
:::

```html:preview
<sl-select label="Medium pill" pill>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
<br />
<sl-select label="Large pill" size="large" pill>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
```

```pug:slim
sl-select[
  label="Medium pill"
  pill=true
]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
br
sl-select[
  label="Large pill"
  size="large"
  pill=true
]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :pill_medium,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Medium pill",
      pill: true,
    }
  = f.input :pill_large,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Large pill",
      size: "large",
      pill: true,
    }
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect pill>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Disabled

Use the `disabled` attribute to disable the entire select. To disable just one option, put `disabled` on the `sl-option`.

```html:preview
<sl-select label="Disabled select" disabled>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
<br/>
<sl-select label="Select with disabled option">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3" disabled>Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>

```

```pug:slim
sl-select[
  label="Disabled select"
  disabled=true
]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
br
sl-select[
  label="Disabled select"
]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" disabled=true Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :disabled_select,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Disabled select",
      disabled: true,
    }
  = f.input :disabled_option,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3", disabled=true],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Disabled select"
    }
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect placeholder="Disabled" disabled>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. When this option is enabled, be sure to also add the `clearable` attribute to display a clear button. To set multiple values at once, set `value` to a space-delimited list of values.

```html:preview
<sl-select label="Select one or more" value="option-1 option-2 option-3" multiple clearable>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
```

```pug:slim
sl-select[
  label="Select one or more"
  value="option-1 option-2 option-3"
  multiple=true
  clearable=true
]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :select_multiple,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Select one or more",
      value: "option-1 option-2 option-3",
      multiple: true,
      clearable: true,
    }
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect label="Select a Few" value={["option-1", "option-2", "option-3"]} multiple clearable>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSelect>
);
```

:::tip
Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.
:::

### Setting Initial Values

Use the `value` attribute to set the initial selection.

When using `multiple`, the `value` _attribute_ uses space-delimited values to select more than one option. Because of this, `<sl-option>` values cannot contain spaces. If you're accessing the `value` _property_ through Javascript, it will be an array.

```html:preview
<sl-select label="Select one or more" value="option-1 option-2" multiple clearable>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
</sl-select>
```

```pug:slim
sl-select[
  label="Select one or more"
  value="option-1 option-2"
  multiple=true
  clearable=true
]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :select_multiple,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Select one or more",
      value: "option-1 option-2",
      multiple: true,
      clearable: true,
    }
```

```jsx:react
import SlDivider from '@teamshares/shoelace/dist/react/divider';
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect value={["option-1", "option-2"]} multiple clearable>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Grouping Options

Use `<sl-divider>` to group listbox items visually. You can also use `<small>` to provide labels for each group, but they won't be announced by most assistive devices.

:::warning
**Note:** `ts_form_for` doesn't support grouping select options with labels and dividers.
:::

```html:preview
<sl-select label="Select an option from one of the groups">
  <sl-option value=""></sl-option>
  <small>Section 1</small>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-divider></sl-divider>
  <small>Section 2</small>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
```

```pug:slim
sl-select label="Select an option from one of the groups"
  sl-option value=""
  small Section 1
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-divider
  small Section 2
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
```

```js:simple-form
/*
  — NOTE: grouping options with labels and dividers
  is not supported with ts_form_for
*/
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size. Note that size does not apply to listbox options. Size `medium` is the select's default.

:::warning
Size `small` is currently not part of the Teamshares Design System, and there is no Figma component for this option. Please check with the design team before using this option.
:::

```html:preview
<sl-select label="Medium input">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
<br />
<sl-select label="Large input" size="large">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
```

```pug:slim
sl-select label="Medium input"
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
br
sl-select[
  label="Large input"
  size="large"
]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :size_medium,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Medium input"
    }
  = f.input :size_large,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Large input",
      size: "large",
    }
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <>
    <SlSelect placeholder="Small" size="small">
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>

    <br />

    <SlSelect placeholder="Medium" size="medium">
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>

    <br />

    <SlSelect placeholder="Large" size="large">
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>
  </>
);
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html:preview
<sl-select label="Select an option" placement="top" help-text="This select’s panel of options will try to open on top first if there is room">
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
```

```pug:slim
sl-select[
  label="Select an option"
  placement="top"
  help-text="This select’s panel of options will try to open on top first if there is room"
]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
```

```js:simple-form
= ts_form_for ... do |f|
  = f.input :select_placement,
    collection: [
      ["Option 1", "option-1"],
      ["Option 2", "option-2"],
      ["Option 3", "option-3"],
      ["Option 4", "option-4"],
      ["Option 5", "option-5"],
      ["Option 6", "option-6"],
    ],
    input_html: {
      label: "Select an option",
      placement: "top",
      "help-text": "This select’s panel of options will try to open on top first if there is room",
    }
```

```jsx:react
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <SlSelect placement="top">
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlDropdown>
);
```

### Prefix Icons

Use the `prefix` slot to prepend an icon to the select.

Follow these general guidelines when adding prefix icons to the select:

- Use the `sl-icon` component
- Use `library="fa"` (our default Font Awesome icon set)
- Use the `Regular` icon style, which means you don't need to add a `fas-` or other prefix to the icon name
  - See [icons sets](/components/icon/#icon-sets) for more about Font Awesome icon styles
- In general **don't** resize icons or change their color from the default already set by the `sl-select` component

:::warning
**Note:** If you find your use case requires a different size or color from the default, bring it up to the Design Team so that we can consider whether the pattern needs to be updated.
:::
:::warning
**Note:** `ts_form_for` doesn't support slots. Prefix icons cannot be added when rendering `sl-select` with `ts_form_for`.
:::

```html:preview
<sl-select label="Prefix icon example: DO">
  <sl-icon library="fa" name="rocket-launch" slot="prefix"></sl-icon>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
<br />
<sl-select label="Prefix icon example: DON'T">
  <sl-icon library="fa" name="fad-rocket-launch" style="font-size: 1.25rem; color:mediumaquamarine;" slot="prefix"></sl-icon>
  <sl-option value="option-1">Option 1</sl-option>
  <sl-option value="option-2">Option 2</sl-option>
  <sl-option value="option-3">Option 3</sl-option>
  <sl-option value="option-4">Option 4</sl-option>
  <sl-option value="option-5">Option 5</sl-option>
  <sl-option value="option-6">Option 6</sl-option>
</sl-select>
<br />
<sl-select label="Prefix icon example: POSSIBLE EXCEPTION" help-text="An icon that is hard to read at the default size" value="option-1">
  <sl-icon library="fa" name="building-circle-check" slot="prefix"></sl-icon>
  <sl-option value="option-1">Option 1 (default alignment)</sl-option>
  <sl-option value="option-2">Option 2 (default alignment)</sl-option>
  <sl-option value="option-3">Option 3 (default alignment)</sl-option>
  <sl-option value="option-4">Option 4 (default alignment)</sl-option></sl-select>
<br />
<sl-select label="Prefix icon example: RESIZED" help-text="Same icon as above, resized. Note that a larger prefix icon will push the option text out of alignment." value="option-1">
  <sl-icon library="fa" name="building-circle-check" style="font-size: 1.25rem;" slot="prefix"></sl-icon>
  <sl-option value="option-1">Option 1 (shifted 4px right due to icon size)</sl-option>
  <sl-option value="option-2">Option 2 (shifted 4px right due to icon size)</sl-option>
  <sl-option value="option-3">Option 3 (shifted 4px right due to icon size)</sl-option>
  <sl-option value="option-4">Option 4 (shifted 4px right due to icon size)</sl-option>
</sl-select>
```

```pug:slim
sl-select label="Prefix icon example: DO"
  sl-icon[
    name="rocket-launch"
    library="fa"
    slot="prefix"
  ]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
br
sl-select label="Prefix icon example: DON'T"
  sl-icon[
    name="fad-rocket-launch"
    library="fa"
    style="font-size: 1.25rem; color:mediumaquamarine;"
    slot="prefix"
  ]
  sl-option value="option-1" Option 1
  sl-option value="option-2" Option 2
  sl-option value="option-3" Option 3
  sl-option value="option-4" Option 4
  sl-option value="option-5" Option 5
  sl-option value="option-6" Option 6
br
sl-select[
  label="Prefix icon example: POSSIBLE EXCEPTION"
  help-text="An icon that is hard to read at the default size."
  value="option-1"
]
  sl-icon[
    name="building-circle-check"
    library="fa"
    slot="prefix"
  ]
  sl-option value="option-1" Option 1 (default alignment)
  sl-option value="option-2" Option 2 (default alignment)
  sl-option value="option-3" Option 3 (default alignment)
  sl-option value="option-4" Option 4 (default alignment)
br
sl-select[
  label="Prefix icon example: RESIZED"
  help-text="Same icon as above, resized. Note that a larger prefix icon will push the option text out of alignment."
  value="option-1"
]
  sl-icon[
    name="building-circle-check"
    library="fa"
    style="font-size: 1.25rem;"
    slot="prefix"
  ]
  sl-option value="option-1" Option 1 (shifted 4px right due to icon size)
  sl-option value="option-2" Option 2 (shifted 4px right due to icon size)
  sl-option value="option-3" Option 3 (shifted 4px right due to icon size)
  sl-option value="option-4" Option 4 (shifted 4px right due to icon size)
```

```js:simple-form
/*
  NOTE: `ts_form_for` doesn't support slots. Prefix icons
  cannot be added when rendering `sl-select` with `ts_form_for`
*/
```

```jsx:react
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlOption from '@teamshares/shoelace/dist/react/option';
import SlSelect from '@teamshares/shoelace/dist/react/select';

const App = () => (
  <>
    <SlSelect placeholder="Small" size="small">
      <SlIcon name="home" slot="prefix"></SlIcon>
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>
    <br />
    <SlSelect placeholder="Medium" size="medium">
      <SlIcon name="home" slot="prefix"></SlIcon>
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>
    <br />
    <SlSelect placeholder="Large" size="large">
      <SlIcon name="home" slot="prefix"></SlIcon>
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>
  </>
);
```

### Custom Tags

When multiple options can be selected, you can provide custom tags by passing a function to the `getTag` property. Your function can return a string of HTML, a <a href="https://lit.dev/docs/templates/overview/">Lit Template</a>, or an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). The `getTag()` function will be called for each option. The first argument is an `<sl-option>` element and the second argument is the tag's index (its position in the tag list).

Remember that custom tags are rendered in a shadow root. To style them, you can use the `style` attribute in your template or you can add your own [parts](/getting-started/customizing/#css-parts) and target them with the [`::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) selector.

:::warning
**Note:** In general, you shouldn't need to do this. If you are working on a design that requires custom styling for the tag, please ensure that there's not a standard tag in the design system that would work instead.
:::
:::warning
**Note:** `ts_form_for` doesn't support slots. Custom tags cannot be added when rendering `sl-select` with `ts_form_for`.
:::

```html:preview
<sl-select
  placeholder="Select one"
  value="email phone"
  multiple
  clearable
  class="custom-tag"
>
  <sl-option value="email">
    <sl-icon slot="prefix" name="envelope" library="fa"></sl-icon>
    Email
  </sl-option>
  <sl-option value="phone">
    <sl-icon slot="prefix" name="phone" library="fa"></sl-icon>
    Phone
  </sl-option>
  <sl-option value="chat">
    <sl-icon slot="prefix" name="comment" library="fa"></sl-icon>
    Chat
  </sl-option>
</sl-select>

<script type="module">
  const select = document.querySelector('.custom-tag');

  select.getTag = (option, index) => {
    // Use the same icon used in the <sl-option>
    const name = option.querySelector('sl-icon[slot="prefix"]').name;

    // You can return a string, a Lit Template, or an HTMLElement here
    return `
      <sl-tag removable>
        <sl-icon library="fa" name="${name}" style="padding-inline-end: .5rem;"></sl-icon>
        ${option.getTextLabel()}
      </sl-tag>
    `;
  };
</script>
```

:::warning
Be sure you trust the content you are outputting! Passing unsanitized user input to `getTag()` can result in XSS vulnerabilities.
:::
