---
meta:
  title: Segmented Control (sl-radio-button)
  description: Segmented controls (`sl-radio-button` in Shoelace) allow the user to select a single option from a group of related options and immediately apply that selection.
layout: component
guidelines: |
  ### When to Use a Segmented Control (sl-radio-button)
  - To let people switch between views applied to the same content — between table and chart views of the same data, for example
  - To let people select a single option from a group of related options and immediately apply that selection

  ### When to Use Something Else
  - Use a [Tab Group](/components/tab-group) instead to let people switch between related but different content (Profile Details and Permissions, for example)
  - Use a [Radio](/components/radio) instead to present people with a single-select form input that needs to be saved before being applied
---

:::warning
**Note:** The component on this page is named `sl-radio-button` but actually implements a UI element more commonly called "segmented control." To implement the UI form element more commonly called "radio button," use the [`sl-radio`](/components/radio) component. Both `sl-radio` and `sl-radio-button` must be nested within an [`sl-radio-group`](/components/radio-group).
:::

## Examples

### Basic Segmented Control

Use `sl-radio-button` nested within [`sl-radio-group`](/components/radio-group) to implement a basic segmented control. When a segment has focus, the arrow keys can be used to change the selected option, just as with standard radio controls.

```html:preview
<sl-radio-group name="time-selection" value="month">
  <sl-radio-button value="month">Month</sl-radio-button>
  <sl-radio-button value="quarter">Quarter</sl-radio-button>
  <sl-radio-button value="year">Year</sl-radio-button>
</sl-radio-group>
```

```pug:slim
sl-radio-group name="time-selection" value="month"
  sl-radio-button value="month" Month
  sl-radio-button value="quarter" Quarter
  sl-radio-button value="year" Year
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

:::tip
Similar to a [switch](/components/switch), a segmented control selection should be applied **immediately**. To present people with a single-select form input that needs to be saved before being applied, use either the [`sl-radio`](/components/radio) or [`sl-select`](/components/select) component.
:::

### Checked States

To set the initial value and checked state, use the `value` attribute on the radio group wrapping the `sl-radio-button` set.

```html:preview
<sl-radio-group name="time-selection" value="month">
  <sl-radio-button value="month">Month</sl-radio-button>
  <sl-radio-button value="quarter">Quarter</sl-radio-button>
  <sl-radio-button value="year">Year</sl-radio-button>
</sl-radio-group>
```

```pug:slim
sl-radio-group name="time-selection" value="month"
  sl-radio-button value="month" Month
  sl-radio-button value="quarter" Quarter
  sl-radio-button value="year" Year
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

### Disabled

Use the `disabled` attribute to disable a segment.

```html:preview
<sl-radio-group name="time-selection" value="month">
  <sl-radio-button value="month">Month</sl-radio-button>
  <sl-radio-button value="quarter" disabled>Quarter</sl-radio-button>
  <sl-radio-button value="year">Year</sl-radio-button>
</sl-radio-group>
```

```pug:slim
sl-radio-group name="time-selection" value="month"
  sl-radio-button value="month" Month
  sl-radio-button value="quarter" disabled=true Quarter
  sl-radio-button value="year" Year
```

```jsx:react
import SlRadioButton from '@teamshares/shoelace/dist/react/radio-button';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" name="a" value="1">
    <SlRadioButton value="1">Option 1</SlRadioButton>
    <SlRadioButton value="2" disabled>
      Option 2
    </SlRadioButton>
    <SlRadioButton value="3">Option 3</SlRadioButton>
  </SlRadioGroup>
);
```

### Sizes

Use the `size` attribute to change the size of the segmented control group.

```html:preview
<sl-radio-group size="small" name="time-selection" value="month">
  <sl-radio-button value="month">Month</sl-radio-button>
  <sl-radio-button value="quarter">Quarter</sl-radio-button>
  <sl-radio-button value="year">Year</sl-radio-button>
</sl-radio-group>

<br />

<sl-radio-group size="medium" name="time-selection" value="month">
  <sl-radio-button value="month">Month</sl-radio-button>
  <sl-radio-button value="quarter">Quarter</sl-radio-button>
  <sl-radio-button value="year">Year</sl-radio-button>
</sl-radio-group>

<br />

<sl-radio-group size="large" name="time-selection" value="month">
  <sl-radio-button value="month">Month</sl-radio-button>
  <sl-radio-button value="quarter">Quarter</sl-radio-button>
  <sl-radio-button value="year">Year</sl-radio-button>
</sl-radio-group>
```

```pug:slim
sl-radio-group size="small" name="time-selection" value="month"
  sl-radio-button value="month" Month
  sl-radio-button value="quarter" Quarter
  sl-radio-button value="year" Year
br
sl-radio-group size="medium" name="time-selection" value="month"
  sl-radio-button value="month" Month
  sl-radio-button value="quarter" Quarter
  sl-radio-button value="year" Year
br
sl-radio-group size="large" name="time-selection" value="month"
  sl-radio-button value="month" Month
  sl-radio-button value="quarter" Quarter
  sl-radio-button value="year" Year
```

```jsx:react
import SlRadioButton from '@teamshares/shoelace/dist/react/radio-button';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup size="small" label="Select an option" name="a" value="1">
    <SlRadioButton value="1">Option 1</SlRadioButton>
    <SlRadioButton value="2">Option 2</SlRadioButton>
    <SlRadioButton value="3">Option 3</SlRadioButton>
  </SlRadioGroup>

  <br />

  <SlRadioGroup size="medium" label="Select an option" name="a" value="1">
    <SlRadioButton value="1">Option 1</SlRadioButton>
    <SlRadioButton value="2">Option 2</SlRadioButton>
    <SlRadioButton value="3">Option 3</SlRadioButton>
  </SlRadioGroup>

  <br />

  <SlRadioGroup size="large" label="Select an option" name="a" value="1">
    <SlRadioButton value="1">Option 1</SlRadioButton>
    <SlRadioButton value="2">Option 2</SlRadioButton>
    <SlRadioButton value="3">Option 3</SlRadioButton>
  </SlRadioGroup>
);
```

<!-- ### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html:preview
<sl-radio-group size="small" label="Select an option" name="a" value="1">
  <sl-radio-button pill value="1">Option 1</sl-radio-button>
  <sl-radio-button pill value="2">Option 2</sl-radio-button>
  <sl-radio-button pill value="3">Option 3</sl-radio-button>
</sl-radio-group>

<br />

<sl-radio-group size="medium" label="Select an option" name="a" value="1">
  <sl-radio-button pill value="1">Option 1</sl-radio-button>
  <sl-radio-button pill value="2">Option 2</sl-radio-button>
  <sl-radio-button pill value="3">Option 3</sl-radio-button>
</sl-radio-group>

<br />

<sl-radio-group size="large" label="Select an option" name="a" value="1">
  <sl-radio-button pill value="1">Option 1</sl-radio-button>
  <sl-radio-button pill value="2">Option 2</sl-radio-button>
  <sl-radio-button pill value="3">Option 3</sl-radio-button>
</sl-radio-group>
```

```pug:slim
sl-radio-group label="Select an option" name="a" value="1"
  sl-radio-button pill=true size="small" value="1" Option 1
  sl-radio-button pill=true size="small" value="2" Option 2
  sl-radio-button pill=true size="small" value="3" Option 3
br
sl-radio-group label="Select an option" name="a" value="1"
  sl-radio-button pill=true size="medium" value="1" Option 1
  sl-radio-button pill=true size="medium" value="2" Option 2
  sl-radio-button pill=true size="medium" value="3" Option 3
br
sl-radio-group label="Select an option" name="a" value="1"
  sl-radio-button pill=true size="large" value="1" Option 1
  sl-radio-button pill=true size="large" value="2" Option 2
  sl-radio-button pill=true size="large" value="3" Option 3
```

```jsx:react
import SlRadioButton from '@teamshares/shoelace/dist/react/radio-button';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup size="small" label="Select an option" name="a" value="1">
    <SlRadioButton pill value="1">Option 1</SlRadioButton>
    <SlRadioButton pill value="2">Option 2</SlRadioButton>
    <SlRadioButton pill value="3">Option 3</SlRadioButton>
  </SlRadioGroup>

  <br />

  <SlRadioGroup size="medium" label="Select an option" name="a" value="1">
    <SlRadioButton pill value="1">Option 1</SlRadioButton>
    <SlRadioButton pill value="2">Option 2</SlRadioButton>
    <SlRadioButton pill value="3">Option 3</SlRadioButton>
  </SlRadioGroup>

  <br />

  <SlRadioGroup size="large" label="Select an option" name="a" value="1">
    <SlRadioButton pill value="1">Option 1</SlRadioButton>
    <SlRadioButton pill value="2">Option 2</SlRadioButton>
    <SlRadioButton pill value="3">Option 3</SlRadioButton>
  </SlRadioGroup>
);
``` -->

### Prefix Icons

Use the `prefix` slot to add an icon to each segment.

```html:preview
<sl-radio-group name="views" value="bar">
  <sl-radio-button value="bar">
    <sl-icon slot="prefix" library="fa" name="fas-chart-simple"></sl-icon>
    Bar chart
  </sl-radio-button>

  <sl-radio-button value="pie">
    <sl-icon slot="prefix" library="fa"  name="fas-circle-three-quarters-stroke"></sl-icon>
    Pie chart
  </sl-radio-button>

  <sl-radio-button value="table">
    <sl-icon slot="prefix" library="fa" name="fas-table-list"></sl-icon>
    Table
  </sl-radio-button>
</sl-radio-group>
```

```pug:slim
sl-radio-group name="view" value="bar"
  sl-radio-button value="bar"
    sl-icon slot="prefix" library="fa" name="fas-chart-simple"
    | Bar chart
  sl-radio-button value="pie"
    sl-icon slot="prefix" library="fa" name="fas-circle-three-quarters-stroke"
    | Pie chart
  sl-radio-button value="table"
    sl-icon slot="prefix" library="fa" name="fas-table-list"
    | Table
```

```jsx:react
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlRadioButton from '@teamshares/shoelace/dist/react/radio-button';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" name="a" value="1">
    <SlRadioButton value="1">
      <SlIcon slot="prefix" name="archive-box" />
      Option 1
    </SlRadioButton>

    <SlRadioButton value="2">
      <SlIcon slot="suffix" name="shopping-bag" />
      Option 2
    </SlRadioButton>

    <SlRadioButton value="3">
      <SlIcon slot="prefix" name="gift" />
      <SlIcon slot="suffix" name="shopping-cart" />
      Option 3
    </SlRadioButton>
  </SlRadioGroup>
);
```

### Segments with Icons

Omit labels and use only icons to create an icon-only segmented control. Be sure to use a **tooltip** to clarify the meaning of each icon control and also set a `label` attribute so that screen readers will announce each option correctly.

```html:preview
<sl-radio-group size="large" name="chart types" value="bar">

  <sl-tooltip content="Bar">
    <sl-radio-button value="bar">
      <sl-icon library="fa" name="fas-chart-simple" label="Bar chart">
      </sl-icon>
    </sl-radio-button>
  </sl-tooltip>

  <sl-tooltip content="Pie">
    <sl-radio-button value="pie">
      <sl-icon library="fa" name="fas-chart-pie" label="Pie chart"></sl-icon>
    </sl-radio-button>
  </sl-tooltip>

  <sl-tooltip content="Line">
    <sl-radio-button value="line">
      <sl-icon library="fa" name="fas-chart-line" label="Line chart"></sl-icon>
    </sl-radio-button>
  </sl-tooltip>

  <sl-tooltip content="Area">
    <sl-radio-button value="area">
      <sl-icon library="fa" name="fas-chart-area" label="Area chart"></sl-icon>
    </sl-radio-button>
  </sl-tooltip>

  <sl-tooltip content="Scatter">
    <sl-radio-button value="scatter">
      <sl-icon library="fa" name="fas-chart-scatter" label="Scatter chart"></sl-icon>
    </sl-radio-button>
  </sl-tooltip>

</sl-radio-group>
```

```pug:slim
sl-radio-group size="large" name="chart types" value="bar"
  sl-tooltip content="Bar"
    sl-radio-button value="bar"
      sl-icon library="fa" name="fas-chart-simple" label="Bar chart"
  sl-tooltip content="Pie"
    sl-radio-button value="pie"
      sl-icon library="fa" name="fas-chart-pie" label="Pie chart"
  sl-tooltip content="Line"
    sl-radio-button value="line"
      sl-icon library="fa" name="fas-chart-line" label="Line chart"
  sl-tooltip content="Area"
    sl-radio-button value="area"
      sl-icon library="fa" name="fas-chart-area" label="Area chart"
  sl-tooltip content="Scatter"
    sl-radio-button value="scatter"
      sl-icon library="fa" name="fas-chart-scatter" label="Scatter chart"
```

```jsx:react
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlRadioButton from '@teamshares/shoelace/dist/react/radio-button';
import SlRadioGroup from '@teamshares/shoelace/dist/react/radio-group';

const App = () => (
  <SlRadioGroup label="Select an option" name="a" value="neutral">
    <SlRadioButton value="angry">
      <SlIcon name="emoji-angry" label="Angry" library="bootstrap" />
    </SlRadioButton>

    <SlRadioButton value="sad">
      <SlIcon name="emoji-frown" label="Sad" library="bootstrap" />
    </SlRadioButton>

    <SlRadioButton value="neutral">
      <SlIcon name="emoji-neutral" label="Neutral" library="bootstrap" />
    </SlRadioButton>

    <SlRadioButton value="happy">
      <SlIcon name="emoji-smile" label="Happy" library="bootstrap" />
    </SlRadioButton>

    <SlRadioButton value="laughing">
      <SlIcon name="emoji-laughing" label="Laughing" library="bootstrap" />
    </SlRadioButton>
  </SlRadioGroup>
);
```
