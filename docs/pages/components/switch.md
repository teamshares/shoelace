---
meta:
  title: Switch
  description: Switches allow the user to toggle an option on or off.
layout: component
unusedProperties: |
  - Size `large`
guidelines: |
  ### Switch or Checkbox?
  - Use a switch to let people toggle a setting that takes effect **immediately**, like a light switch
  - Use a [checkbox](/components/checkbox) to let people toggle a selection that must be **saved before taking effect**

  ### Switch Labels

  **Label Dos**
  - Always have a label for the switch
  - Use **sentence case**
  - Keep labels **short and easy to scan**
  - Use a leading verb only when it **clarifies** the switch's purpose

  **Label Don'ts**
  - **Don’t** end labels with punctuation
  - **Avoid** labels that describe the switch's "on" state (e.g. "Turn on" or "Enable")
  - **Don't** update the label dynamically based on a switch's `checked` state

  :::tip
  **Do**
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Shareholder view</sl-switch></div>
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Allow edits</sl-switch></div>
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Require password</sl-switch></div>

  - Do use sentence case and keep the label short
  - Do use a leading verb if it clarifies what the switch does
  :::

  :::danger 
  **Don’t**
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Enable Shareholder View.</sl-switch></div>
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Disable no-edit mode</sl-switch></div>
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Turn on Password Requirement</sl-switch></div>

  - Don’t use title case or end with punctuation
  - Don’t use negative labels (like "hide" and "disable") that conflict with the “on” state of the switch
  - Don't repeat the switch's "on" state in the label
  :::
testing: |
  ### With Cypress

  **Adding `data-test-id` to a component**

   To test `<sl-switch>`, add the `data-test-id` attribute directly to the component:

  ```
    sl-switch[
      data-test-id="switch-test"
    ] 
      | Switch test
  ```

  **Cypress commands for `<sl-switch>`**

  Because `<sl-switch>` uses `<input type="checkbox">`, we can test the switch the same way we would test the [checkbox](/components/checkbox/#testing).

  To toggle the switch **ON**:
  ```
    cy.slCheckboxCheck(`[data-test-id="switch-test"]`);
  ```

  To toggle the switch **OFF**::
  ```
    cy.slCheckboxUncheck(`[data-test-id="switch-test"]`);
  ```

  To verify the switch **is ON**:
  ```
    cy.get(`[data-test-id="switch-test"]`).should("have.prop", "checked", true);
  ```

  To verify the switch **is OFF**:
  ```
    cy.get(`[data-test-id="switch-test"]`).should("have.prop", "checked", false);
  ```
---

## Examples

### Basic Switch

```html:preview
<sl-switch>Shareholder view</sl-switch>
```

```pug:slim
sl-switch Shareholder view
```

```jsx:react
import SlSwitch from '@teamshares/shoelace/dist/react/switch';

const App = () => <SlSwitch>Switch</SlSwitch>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

### Label Position

Use the `label-position` attribute to change the position of the switch's label. The default position is `right`.

```html:preview
<sl-switch>Shareholder view</sl-switch>
<sl-divider style="--spacing: 2rem;"></sl-divider>
<sl-switch label-position="left">President view</sl-switch>
<sl-divider style="--spacing: 2rem;"></sl-divider>
<sl-switch label-position="left-justified">Admin view</sl-switch>
```

```pug:slim
sl-switch Shareholder view
sl-divider style="--spacing: 2rem;"
sl-switch label-position="left" President view
sl-divider style="--spacing: 2rem;"
sl-switch label-position="left-justified" Shareholder view
```

```jsx:react
import SlSwitch from '@teamshares/shoelace/dist/react/switch';

const App = () => <SlSwitch>Switch</SlSwitch>;
```

### Checked

Use the `checked` attribute to activate the switch.

```html:preview
<sl-switch checked>Checked</sl-switch>
```

```pug:slim
sl-switch checked="true" Checked
```

```jsx:react
import SlSwitch from '@teamshares/shoelace/dist/react/switch';

const App = () => <SlSwitch checked>Checked</SlSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html:preview
<sl-switch disabled>Disabled</sl-switch>
```

```pug:slim
sl-switch disabled="true" Disabled
```

```jsx:react
import SlSwitch from '@teamshares/shoelace/dist/react/switch';

const App = () => <SlSwitch disabled>Disabled</SlSwitch>;
```

### Sizes

Use the `size` attribute to change a switch's size. Size `medium` is the switch's default.

:::warning
Size `large` is currently not part of the Teamshares Design System, and there is no Figma component for this option. Please check with the design team before using this option.
:::

```html:preview
<sl-switch size="small">Small switch</sl-switch>
<br />
<sl-switch size="medium">Medium switch (default)</sl-switch>
```

```pug:slim
sl-switch size="small" Small switch
br
sl-switch size="medium" Medium switch (default)
```

```jsx:react
import SlSwitch from '@teamshares/shoelace/dist/react/switch';

const App = () => (
  <>
    <SlSwitch size="small">Small</SlSwitch>
    <br />
    <SlSwitch size="medium">Medium</SlSwitch>
  </>
);
```

### Help Text

Add descriptive help text to a switch with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

:::warning
**Note:** To avoid awkward alignment of the switch, label, and help text, don't display help text when using `label-position="left"`.
:::

```html:preview
<sl-switch help-text="Displays company financials">Shareholder view</sl-switch>
<sl-divider style="--spacing: 2rem;"></sl-divider>
<sl-switch label-position="left-justified" help-text="Displays network financials and reporting data">Admin view</sl-switch>
<sl-divider style="--spacing: 2rem;"></sl-divider>
<sl-switch label-position="left" help-text="Don't display help text when using label-position: 'left'" checked>Please avoid doing this</sl-switch>
```

```pug:slim
sl-switch help-text="Displays company financials"
  | Shareholder view
sl-divider style="--spacing: 2rem;"
sl-switch label-position="left-justified" help-text="Displays network financials and reporting data"
  | Shareholder view
```

```jsx:react
import SlSwitch from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => <SlSwitch help-text="What should the user know about the switch?">Label</SlSwitch>;
```

### Custom Styles

Use the available custom properties to change how the switch is styled.

:::warning
**Note:** In general, you shouldn't need to do this. If you are working on a design that requires custom styling, please ensure that there's not a standard switch in the design system that would work instead. If you really do need a non-standard switch, please consult the design team before implementing a custom version, so that the team can determine whether the existing pattern should be updated.
:::

```html:preview
<sl-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;"><span style="font-size:1.25rem; padding-left: .5rem;">Large custom switch</span></sl-switch>
```

```pug:slim
sl-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;" Really big
```

{% raw %}

```jsx:react
import SlSwitch from '@teamshares/shoelace/dist/react/switch';

const App = () => (
  <SlSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

{% endraw %}
