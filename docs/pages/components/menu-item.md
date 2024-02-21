---
meta:
  title: Menu Item
  description: Menu items provide options for the user to pick from in a menu.
layout: component
guidelines: |
  ### General guidelines
  - Refer to the [Menu component general guidelines](/components/menu/#guidelines-1)
---

## Examples

### Basic Menu Item

Menu items look identical to [options](/components/option), but they are designed to be used in a [menu](/components/menu), whereas options are meant to be used in a [select](/components/select).

```html:preview
<sl-menu style="max-width: 200px;">
  <sl-menu-item>Option 1</sl-menu-item>
  <sl-menu-item>Option 2</sl-menu-item>
  <sl-menu-item>Option 3</sl-menu-item>
  <sl-divider></sl-divider>
  <sl-menu-item type="checkbox" checked>Checkbox</sl-menu-item>
  <sl-menu-item disabled>Disabled</sl-menu-item>
  <sl-divider></sl-divider>
  <sl-menu-item>
    Prefix icon
    <sl-icon slot="prefix" library="fa" name="fal-leaf"></sl-icon>
  </sl-menu-item>
  <sl-menu-item>
    Suffix icon
    <sl-icon slot="suffix" library="fa" name="fal-flower-tulip"></sl-icon>
  </sl-menu-item>
</sl-menu>
```

```pug:slim
sl-menu style="max-width: 200px;"
  sl-menu-item Option 1
  sl-menu-item Option 2
  sl-menu-item Option 3
  sl-divider
  sl-menu-item type="checkbox" checked="true" Checkbox
  sl-menu-item disabled="true" Disabled
  sl-divider
  sl-menu-item
    | Prefix icon
    sl-icon slot="prefix" library="fa" name="fal-leaf"
  sl-menu-item
    | Suffix icon
    sl-icon slot="suffix" library="fa" name="fal-flower-tulip"
```

{% raw %}

```jsx:react
import SlDivider from '@teamshares/shoelace/dist/react/divider';
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlMenu from '@teamshares/shoelace/dist/react/menu';
import SlMenuItem from '@teamshares/shoelace/dist/react/menu-item';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem>Option 1</SlMenuItem>
    <SlMenuItem>Option 2</SlMenuItem>
    <SlMenuItem>Option 3</SlMenuItem>
    <SlDivider />
    <SlMenuItem type="checkbox" checked>
      Checkbox
    </SlMenuItem>
    <SlMenuItem disabled>Disabled</SlMenuItem>
    <SlDivider />
    <SlMenuItem>
      Prefix Icon
      <SlIcon slot="prefix" name="gift" />
    </SlMenuItem>
    <SlMenuItem>
      Suffix Icon
      <SlIcon slot="suffix" name="heart" />
    </SlMenuItem>
  </SlMenu>
);
```

{% endraw %}

### Disabled

Add the `disabled` attribute to disable a menu item so it cannot be selected.

```html:preview
<sl-menu style="max-width: 200px;">
  <sl-menu-item>Option 1</sl-menu-item>
  <sl-menu-item disabled>Option 2</sl-menu-item>
  <sl-menu-item>Option 3</sl-menu-item>
</sl-menu>
```

```pug:slim
sl-menu style="max-width: 200px;"
  sl-menu-item Option 1
  sl-menu-item disabled="true" Option 2
  sl-menu-item Option 3
```

{% raw %}

```jsx:react
import SlMenu from '@teamshares/shoelace/dist/react/menu';
import SlMenuItem from '@teamshares/shoelace/dist/react/menu-item';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem>Option 1</SlMenuItem>
    <SlMenuItem disabled>Option 2</SlMenuItem>
    <SlMenuItem>Option 3</SlMenuItem>
  </SlMenu>
);
```

{% endraw %}

### Prefix & Suffix Icons

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

Follow these general guidelines when adding prefix and suffix icons to option items:

- Use the `sl-icon` component
- Use `library="fa"` (our default Font Awesome icon set)
- Use the `Light` icon style, which means you **need to add a `fal-` prefix** to the icon name
  - See [icons sets](/components/icon/#icon-sets) for more about Font Awesome icon styles
- In general **don't** resize icons or change their color from the default already set by the `sl-option` component

:::warning
**Note:** If you find your use case requires a different size or color from the default, bring it up to the Design Team so that we can consider whether the pattern needs to be updated.
:::

```html:preview
<sl-menu style="max-width: 240px;">
  <sl-menu-item>
    <sl-icon slot="prefix" library="fa" name="fal-user"></sl-icon>
    Profile
  </sl-menu-item>

  <sl-menu-item>
    <sl-icon slot="prefix" library="fa" name="fal-bell"></sl-icon>
    Notifications
    <sl-badge slot="suffix">12</sl-badge>
  </sl-menu-item>

  <sl-menu-item>
    <sl-icon slot="prefix" library="fa" name="fal-gear"></sl-icon>
    Settings
  </sl-menu-item>

  <sl-divider></sl-divider>

  <sl-menu-item>
    <sl-icon slot="prefix" library="fa" name="fal-arrow-right-from-bracket"></sl-icon>
    Log out
  </sl-menu-item>
</sl-menu>
```

```pug:slim
sl-menu style="max-width: 240px;"
  sl-menu-item
    sl-icon slot="prefix" library="fa" name="fal-user"
    | Profile
  sl-menu-item
    sl-icon slot="prefix" library="fa" name="fal-bell"
    | Notifications
  sl-menu-item
    sl-icon slot="prefix" library="fa" name="fal-gear"
    | Settings
    sl-badge slot="suffix" variant="primary" pill="true" 12
  sl-divider
  sl-menu-item
    sl-icon slot="prefix" library="fa" name="fal-arrow-right-from-bracket"
    | Log out
```

{% raw %}

```jsx:react
import SlBadge from '@teamshares/shoelace/dist/react/badge';
import SlDivider from '@teamshares/shoelace/dist/react/divider';
import SlIcon from '@teamshares/shoelace/dist/react/icon';
import SlMenu from '@teamshares/shoelace/dist/react/menu';
import SlMenuItem from '@teamshares/shoelace/dist/react/menu-item';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem>
      <SlIcon slot="prefix" name="home" />
      Home
    </SlMenuItem>

    <SlMenuItem>
      <SlIcon slot="prefix" name="envelope" />
      Messages
      <SlBadge slot="suffix" variant="primary" pill>
        12
      </SlBadge>
    </SlMenuItem>

    <SlDivider />

    <SlMenuItem>
      <SlIcon slot="prefix" name="cog-6-tooth" />
      Settings
    </SlMenuItem>
  </SlMenu>
);
```

{% endraw %}

### Checkbox Menu Items

Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.

```html:preview
<sl-menu style="max-width: 200px;">
  <sl-menu-item type="checkbox">Autosave</sl-menu-item>
  <sl-menu-item type="checkbox" checked>Check spelling</sl-menu-item>
  <sl-menu-item type="checkbox">Word wrap</sl-menu-item>
</sl-menu>
```

```pug:slim
sl-menu style="max-width: 200px;"
  sl-menu-item type="checkbox" Autosave
  sl-menu-item type="checkbox" checked="true" Check spelling
  sl-menu-item type="checkbox" Word wrap
```

{% raw %}

```jsx:react
import SlMenu from '@teamshares/shoelace/dist/react/menu';
import SlMenuItem from '@teamshares/shoelace/dist/react/menu-item';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem type="checkbox">Autosave</SlMenuItem>
    <SlMenuItem type="checkbox" checked>
      Check Spelling
    </SlMenuItem>
    <SlMenuItem type="checkbox">Word Wrap</SlMenuItem>
  </SlMenu>
);
```

{% endraw %}

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `sl-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html:preview
<sl-menu class="menu-value" style="max-width: 200px;">
  <sl-menu-item value="opt-1">Option 1</sl-menu-item>
  <sl-menu-item value="opt-2">Option 2</sl-menu-item>
  <sl-menu-item value="opt-3">Option 3</sl-menu-item>
  <sl-divider></sl-divider>
  <sl-menu-item type="checkbox" value="opt-4">Checkbox 4</sl-menu-item>
  <sl-menu-item type="checkbox" value="opt-5">Checkbox 5</sl-menu-item>
  <sl-menu-item type="checkbox" value="opt-6">Checkbox 6</sl-menu-item>
</sl-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('sl-select', event => {
    const item = event.detail.item;

    // Log value
    if (item.type === 'checkbox') {
      console.log(`Selected value: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Selected value: ${item.value}`);
    }
  });
</script>
```

```pug:slim
sl-menu.menu-value style="max-width: 200px;"
  sl-menu-item value="opt-1" Option 1
  sl-menu-item value="opt-2" Option 2
  sl-menu-item value="opt-3" Option 3
  sl-divider
  sl-menu-item type="checkbox" value="opt-4" Checkbox 4
  sl-menu-item type="checkbox" value="opt-5" Checkbox 5
  sl-menu-item type="checkbox" value="opt-6" Checkbox 6

javascript:
  const menu = document.querySelector(.menu-value);

  menu.addEventListener(sl-select, event => {
  const item = event.detail.item;

  // Log value
  if (item.type === checkbox) {
    console.log(`Selected value: ${item.value} (${item.checked ? checked : unchecked})`);
  } else {
    console.log(`Selected value: ${item.value}`);
  }
  });
```

{% raw %}

```jsx:react
import SlMenu from '@teamshares/shoelace/dist/react/menu';
import SlMenuItem from '@teamshares/shoelace/dist/react/menu-item';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <SlMenu style={{ maxWidth: '200px' }} onSlSelect={handleSelect}>
      <SlMenuItem value="opt-1">Option 1</SlMenuItem>
      <SlMenuItem value="opt-2">Option 2</SlMenuItem>
      <SlMenuItem value="opt-3">Option 3</SlMenuItem>
    </SlMenu>
  );
};
```

{% endraw %}
