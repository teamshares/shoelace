---
meta:
  title: Shoelace & Cypress
---

# Shoelace & Cypress

> Tips for testing Shoelace components with Cypress

## TL;DR

For the most part, you can use Shoelace components the same way you'd use their HTML equivalents, since they emit many of the same events (`click`, `focus`, etc). But like all web components, Shoelace components encapsulate their internal parts within the [shadow dom](https://css-tricks.com/styling-in-the-shadow-dom-with-css-shadow-parts/).

This means that the internals of Shoelace components aren't available directly on the DOM (via `document.querySelector`, etc.), but have to be queried via the [`Element.shadowRoot` property](https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot).

Cypress provides a convenience method for accessing the shadow DOM via the [`.shadow()` method.](https://docs.cypress.io/api/commands/shadow).

For example, to find the anchor tag within a link button:

```js
cy.get('sl-button[href]').shadow().find('a');
```

To click on a specific button:

```js
cy.get('[data-test-id="some_sl_button"]').click();
```

Read on for more details on using Cypress for testing Shoelace design system components, including a quick [Cypress Commands Cheat Sheet](#cypress-commands-cheat-sheet), as well as more detailed examples for [Generic Commands](#generic-commands) and [Custom Commands](#custom-commands).

You can also find component-specific testing documentation for some [form-related components](#links-to-component-documentation) on that component's documentation page.

### Cypress Commands Cheat Sheet

<div class="cy-table-desc">This is a quick reference guide to common test actions for form components.</div>

| Component             | Test action                        | Cypress command                                                        |
| --------------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| **Checkbox**          | <span>check</span>                 | [`cy.slCheckboxCheck()`](#cy_slcheckboxcheck)                          |
|                       | <span>uncheck</span>               | [`cy.slCheckboxUncheck()`](#cy_slcheckboxuncheck)                      |
|                       | <span>is checked?</span>           | [`cy.get().should("have.prop", "checked", true)`](#shouldhave_prop)    |
|                       | <span>is not checked?</span>       | [`cy.get().should("have.prop", "checked", false)`](#shouldhave_prop)   |
| **Checkbox Group**    | <span>check</span>                 | [`cy.slCheckboxCheck()`](#cy_slcheckboxcheck)                          |
|                       | <span>uncheck</span>               | [`cy.slCheckboxUncheck()`](#cy_slcheckboxuncheck)                      |
|                       | <span>items checked?</span>        | [`cy.slCheckboxGroupValue()`](#cy_slcheckboxgroupvalue)                |
|                       | <span>items not checked?</span>    | [`cy.get().should("not.have.value", "value")`](#shouldhave_value)      |
| **Input**             | <span>focus</span>                 | [`cy.slFocus()`](#cy_slfocus)                                          |
|                       | <span>type</span>                  | [`cy.slInputType()`](#cy_slinputtype)                                  |
|                       | <span>clear</span>                 | [`cy.slClear()`](#cy_slclear)                                          |
|                       | <span>value?</span>                | [`cy.get().should("have.value", "value")`](#shouldhave_value)          |
| **Radio/Radio Group** | <span>select radio in group</span> | [`cy.get().click()`](#click)                                           |
|                       | <span>radio selected?</span>       | [`cy.get().should("have.value", "value")`](#shouldhave_value)          |
|                       | <span>radio not selected?</span>   | [`cy.get().should("not.have.value", "value")`](#shouldhave_value)      |
| **Select**            | <span>select option</span>         | [`cy.slSelectByOptionText()`](#cy_slselectbyoptiontext)                |
|                       | <span>option selected?</span>      | [`cy.slSelectValue().should("equal", "value")`](#cy_slselectvalue)     |
|                       | <span>option not selected?</span>  | [`cy.slSelectValue().should("not.equal", "value")`](#cy_slselectvalue) |
| **Textarea**          | <span>focus</span>                 | [`cy.slFocus()`](#cy_slfocus)                                          |
|                       | <span>type</span>                  | [`cy.slTextAreaType()`](#cy_sltextareatype)                            |
|                       | <span>clear</span>                 | [`cy.slTextAreaClear()`](#cy_sltextareaclear)                          |
|                       | <span>value?</span>                | [`cy.get().should("have.value", "value")`](#shouldhave_value)          |

## Generic Commands

The following are generic Cypress commands that can be used for testing Shoelace design system components:

### `click()`

Use to **click** an element like [sl-button](/components/button) or radio item in [sl-radio-group](/components/radio-group/#with-cypress):

```js
cy.get(`[data-test-id="item-test-1"]`).click();
```

<!-- :::tip
What other elements does this work for?
::: -->

### `should('have.prop')`

Use on boolean elements like [sl-checkbox](/components/checkbox/#with-cypress) and [sl-switch](/components/switch/#with-cypress) to verify whether the input is checked:

```js
cy.get(`[data-test-id="checkbox-checked"]`).should('have.prop', 'checked', true);
cy.get(`[data-test-id="checkbox-not-checked"]`).should('have.prop', 'checked', false);
```

### `should('have.value')`

Use to check an input's value. Can be used for text inputs like [sl-input](/components/input/#with-cypress), [sl-textarea](/components/textarea/#with-cypress):

```js
cy.get(`[data-test-id="input-test"]`).should('have.value', 'Your text here');
```

Also for checking the value of [sl-radio-group](/components/radio-group/#with-cypress):

```js
cy.get(`[data-test-id="checkbox-group-test"]`).should('have.value', 'option-3');
```

Can also use to verify that an input does **NOT** have a certain value:

```js
cy.get(`[data-test-id="checkbox-group-test"]`).should('not.have.value', 'option-1');
```

<!-- :::tip
Does this also work for Checkbox Group? Select?
::: -->

## Custom Commands

The following are custom Cypress commands created for testing Shoelace design system components:

### `cy.slCheckboxCheck()`

Use to **check** boolean elements like [sl-checkbox](/components/checkbox/#with-cypress), [sl-switch](/components/switch/#with-cypress):

```js
cy.slCheckboxCheck(`[data-test-id="checkbox-test"]`);
```

### `cy.slCheckboxUncheck()`

Use to **uncheck** boolean elements like [sl-checkbox](/components/checkbox/#with-cypress), [sl-switch](/components/switch/#with-cypress):

```js
cy.slCheckboxUncheck(`[data-test-id="checkbox-test"]`);
```

### `cy.slCheckboxGroupValue()`

Use to check the **value** of [sl-checkbox-group](/components/checkbox-group/#with-cypress):

```js
cy.slCheckboxGroupValue(`[data-test-id="checkbox-group-test"]`, ['option-1', 'option-2']);
```

### `cy.slInputType()`

Use to **type** in [sl-input](/components/input/#with-cypress):

```js
cy.slInputType('[data-test-id="input-test"]', 'Your text here');
```

### `cy.slTextAreaType()`

Use to **type** in [sl-textarea](/components/textarea/#with-cypress):

```js
cy.slTextAreaType(`[data-test-id="textarea-test"]`, 'This is long text to type into the textarea for testing.');
```

### `cy.slFocus()`

Use to **focus** on elements like [sl-input](/components/input/#with-cypress) and [sl-textarea](/components/textarea/#with-cypress):

```js
cy.slFocus(`[data-test-id="input-test"]`);
```

<!-- :::tip
What other elements does this work for?
::: -->

### `cy.slClear()`

Use to **clear** [sl-input](/components/input/#with-cypress):

```js
cy.slClear(`[data-test-id="input-test"]`);
```

<!-- :::tip
What other elements does this work for?
::: -->

### `cy.slTextAreaClear()`

Use to **clear** [sl-textarea](/components/textarea/#with-cypress):

```js
cy.slTextAreaClear(`[data-test-id="textarea-test"]`);
```

### `cy.slSelectByOptionText()`

Use to **select** an option in [sl-select](/components/select/#with-cypress):

```js
cy.slSelectByOptionText(`[data-test-id="select-test"]`, 'Option 1');
```

### `cy.slSelectValue()`

Use in [sl-select](/components/select/#with-cypress), to verify that an option **is selected**:

```js
cy.slSelectValue(`[data-test-id="select-text"]`).should('equal', 'option-1');
```

To verify that an option is **NOT selected**:

```js
cy.slSelectValue(`[data-test-id="select-text"]`).should('not.equal', 'option-2');
```

## Links to Component Documentation

You can find additional documentation for testing specific components with Cypress, including where to add `data-test-id` on `sl-` and `ts_form_for` components, on the following component documentation pages:

- [sl-checkbox](/components/checkbox/#testing)
- [sl-checkbox-group](/components/checkbox-group/#testing)
- [sl-input](/components/input/#testing)
- [sl-radio-group](/components/radio-group/#testing)
- [sl-select](/components/select/#testing)
- [sl-switch](/components/switch/#testing)
- [sl-textarea](/components/textarea/#testing)

## Questions and Feedback

Commands not working as expected? Need a specific command for testing but not seeing it here?

Ping the `#design-system` Slack channel to let the team know!
