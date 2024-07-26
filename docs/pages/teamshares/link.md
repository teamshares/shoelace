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

Use `class="ts-text-link"` to apply the default Teamshares Design System link style to text. For link text on a dark background, use `ts-text-link-light`.

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

**For text link styling:** Use `variant="text"` on `sl-button` to display a low-emphasis plain text button. Note that `text` buttons have **no backgrounds, borders, or padding**.

**To render a hypertext link with `<sl-button>`:** Set the `href` attribute on `sl-button` to make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `target` and `download` attributes.

See **[Button](/components/button)** for full `sl-button` specs.

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

## Usage

**When to Use the Default Link Style vs the Text Button**

- Use the **default link style** for inline links that appear within a sentence or paragraph. The visible underline helps to differentiate the link text from the plain text.

- Use the **text button** for stand-alone text, when the context and label alone make it clear that the text is interactive.

<div id="guidelines-content">

:::tip
**Do**

  <div class="well do">
    <div class="ts-body-2">
      Teamshares is an <a href="#" class="ts-text-link">employee ownership platform</a> for small business, driven by
      proprietary software, education, and financial products.
    </div>
  </div>

  <div class="well do">
    <sl-button variant="text" size="medium" href="https://example.com/" target="_blank">Open statement
      <sl-icon slot="suffix" library="fa" name="arrow-up-right-from-square"></sl-icon>
    </sl-button>
  </div>

- Do use the default link style when a link appears inline with plain text.
- Do use `<sl-button variant="text">` to render a Text Button when the context and label alone make it clear that the text is interactive. For example, when the context is a header menu, or the label includes an action to indicate what will happen when the link is clicked.
  :::

:::danger
**Don't**

  <div class="well do">
    <div class="ts-body-2">
      Teamshares is an <a href="#" class="ts-text-link" style="text-decoration: none">employee ownership platform</a> for small business, driven by
      proprietary software, education, and financial products.
    </div>
  </div>

  <div class="well do" style="align-items: flex-start;">
    <h6>Summary of legal agreement</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <sl-button variant="text" size="medium" href="https://example.com/" target="_blank">Full legal agreement
    </sl-button>
  </div>

- Don’t override the default link style and remove the underline when a link appears inline with plain text. Color alone is not enough to differentiate the link text from plain text.
- Don’t use `<sl-button variant="text">` to render a Text Button when the context and label alone don’t make it clear that the text is interactive. Either update button label and/or placement, or use the default link style instead.
:::
</div>
