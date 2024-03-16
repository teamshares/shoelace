---
meta:
  title: Switch
  description: Switches allow the user to toggle an option on or off.
layout: component
unusedProperties: |
  - Size `large`
guidelines: |
  **Switch or Checkbox?**
  - Use a switch to let users toggle a setting that takes effect **immediately**, like a light switch
  - Use a checkbox to let users toggle a selection that must be **saved before taking effect**

  **Switch Labels**

  - **Always** have a label for the switch
  - Use **sentence case** for labels
  - **Don’t** end labels with punctuation
  - Keep labels **short and easy to scan**
  - Focus on describing what will happen **when the switch is on**
  - Try to avoid using **negative** labels that conflict with the “on” state of a switch
  - If presenting a group of switches, aim for **consistency** throughout the group

  :::tip
  **Do**
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Show weekly vitals</sl-switch></div>
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Show monthly numbers</sl-switch></div>
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Show financial reporting</sl-switch></div>

  - Do use sentence case and keep the label short
  - Do describe what will happen when the switch is on
  - Do make sure label styles are consistent across a group
  :::

  :::danger 
  **Don’t**
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Show Weekly Vitals.</sl-switch></div>
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Hide Monthly Numbers.</sl-switch></div>
  <div style="padding: 0 0 .25rem;"><sl-switch checked>Turn Financial Reporting on?</sl-switch></div>

  - Don’t use title case or end with punctuation
  - Don’t use inconsistent label styles across a group
  - Don’t present the switch as a question
  - In general don’t use negative labels (like "hide") that conflict with the “on” state of the switch
  :::
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

```html:preview
<sl-switch help-text="Displays company financials">Shareholder view</sl-switch>
<sl-divider style="--spacing: 2rem;"></sl-divider>
<sl-switch label-position="left" help-text="Displays company financials and reporting data">President view</sl-switch>
<sl-divider style="--spacing: 2rem;"></sl-divider>
<sl-switch label-position="left-justified" help-text="Displays network financials and reporting data">Admin view</sl-switch>

```

```pug:slim
sl-switch help-text="Displays company financials"
  | Shareholder view
sl-divider style="--spacing: 2rem;"
sl-switch label-position="left" help-text="Displays company financials and reporting data"
  | President view
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
