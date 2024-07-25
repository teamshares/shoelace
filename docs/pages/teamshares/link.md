---
meta:
  title: Link
---

# Link

> Links take the user to another screen, or to a specific part of the current screen.

:::tip
**Note:** There is no link component in the Teamshares Design System. Links can be styled using the default link class (`ts-text-link`) or rendered using the `<sl-button>` component. See details below.
:::

## Examples

### Default Link Style

Use the class `ts-text-link` to apply the default Teamshares Design System link style to text. For link text on a dark background, use `ts-text-link-light`.

:::tip
Use the default link style for link text that appears alongside regular body text, as the visible underline will make it clear that the link text is interactive.
:::

```html:preview
<div class="ts-body-1">
  Teamshares is an <a href="#" class="ts-text-link">employee ownership platform</a> for small business, driven by
  proprietary software, education, and financial products.
</div>
<div class="dark-background">
  <div class="ts-body-1 ts-text-light">
    Teamshares is an <a href="#" class="ts-text-link-light">employee ownership platform</a> for small business, driven
    by proprietary software, education, and financial products.
  </div>
</div>
```

```pug:slim
.ts-body-1
  | Teamshares is an
  a.ts-text-link href="#"
    | employee ownership platform
  | for small business, driven by proprietary software, education, and financial products.

.dark-background
  .ts-body-1.ts-text-light
    | Teamshares is an
    a.ts-text-link-light href="#"
      | employee ownership platform
    | for small business, driven by proprietary software, education, and financial products.
```

### Link Button, `variant="text"`

Set the `href` attribute on `sl-button` to make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `target` and `download` attributes.

Use `variant="text"` on `sl-button` to display a low-emphasis plain text button that looks more like body copy. Note that `text` buttons have **no backgrounds, borders, or padding**.

:::tip
Use this button type only when the context and label make it clear that the text is interactive.
:::

```html:preview
<sl-button variant="text" size="small" href="/assets/images/wordmark.svg" download="shoelace.svg">
  <sl-icon slot="prefix" library="fa" name="arrow-down-to-bracket"></sl-icon>
  Download statement</sl-button>
<br/>
<br/>
<sl-button variant="text" size="medium" href="https://example.com/" target="_blank">Open statement
  <sl-icon slot="suffix" library="fa" name="arrow-up-right-from-square"></sl-icon>
</sl-button>
```

```pug:slim
sl-button variant="text" size="small" href="/assets/images/wordmark.svg" download="shoelace.svg"
  sl-icon slot="prefix" library="fa" name="arrow-down-to-bracket"
  | Text
br
br
sl-button variant="text" size="medium" href="https://example.com/" target="_blank"
  | Text
  sl-icon slot="suffix" library="fa" name="arrow-up-right-from-square"
```

:::warning
**Note:** Don't use `text` buttons in size `large` or `x-large`. There is no visible difference between the `text` button's `medium` and `large` sizes, and the `x-large` size gives too mich emphasis to the button. Please check with the design team before using these size options.
:::

See **[Button](/components/button)** for full `sl-button` specs.
