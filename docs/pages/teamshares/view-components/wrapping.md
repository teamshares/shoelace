---
meta:
  title: View Components
---

# View Components

## View Component Wrapping

> TL;DR: If you want to use the auto-generated Stimulus controllers and encapsulated styling for your View Components, you need to:
>
> 1. Call `with_component_assets` within your `component.rb` class
> 1. Have a single top-level element in your view (if not, a top-level `<div>` will be created automatically)
> 1. Put your styling within a `component.scss` in your component folder -- CSS selectors will be automatically prefixed to apply only to your component

---

The Platform team recently released changes to `teamshares-rails` that allowed almost all the assets for a component to live in the same folder: the Ruby class, Slim template view, Stimulus controller, preview, and stylesheet. In order to do that, we were previously wrapping every component in a `<ts-wrapper>` tag, which served as a top-level wrapper element for the Stimulus controller and a generated CSS class that would encapsulate the component's style rules. However, this wrapper element caused some problems in terms of styling, since it added a new level of hierarchy to the DOM. (More details [here](https://github.com/teamshares/architecture-decision-record/pull/31).)

Our new pattern (as of October 2024) is twofold:

### 1. Opt-in wrapping via `with_component_assets`

View Components no longer get wrapped by default. Wrapping is now opt-in via the `with_component_assets` class method, called within the component's class definition:

```ruby
class SharedUI::Demo::Component < SharedUI::ApplicationComponent
  with_component_assets

  def initialize(title:)
    super
    @title = title
  end
end
```

If you don't include `with_component_assets`, the component will not receive the auto-generated Stimulus controller and CSS class from their folder.

### 2. Automatic application of styles and controller

If you _do_ enable the wrapper, the component will get wrapped with the `<ts-wrapper>` tag, which will have the generated controller and scoped CSS class applied to it. A component with this code:

`component.html.slim`

```
.bar data-controller="some-controller"
  .baz Some text
```

`component.rb`

```
class Foo::Component < ApplicationComponent
  with_component_assets

  def some_method
    ...
  end
end
```

Will yield the following raw HTML:

```
<ts-wrapper class="c-foo" data-controller="components--foo">
  <div class="bar" data-controller="some-controller">
    <div class="baz">Some text content</div>
  </div>
</ts-wrapper>
```

Using the magic of the `connectedCallback()` method of web components, the `<ts-wrapper>` tag will be removed as soon as the component hits the DOM, after first applying its properties to the component itself. Effectively, it will appear as though the controller and CSS were applied directly to the top-level element of the View Component.

> Caveat: If your component doesn't have a single top-level element, the code will automatically create a new `<div>` and wrap the contents of your view in it. This is so that it can apply the controller and CSS parent class.

In order to make this work, we now support a special `._base {}` class definition in the `component.scss` -- styles that appear within the `._base` block will be applied directly to the generated CSS class for the component. For example, if your component is called `Foo`, and your `._base` class contained a style rule `background: red;`, the compiled CSS that ends up in `application.css` would be:

```
c-foo {
  background: red;
}
```

What does this look like in practice? Check out the example code below.

## Example Code

A component with this file structure and code:

```
/Foo/
  - component.html.slim
  - component.rb
  - controller.js
  - preview.rb
  - style.scss
```

`component.html.slim`

```
.bar data-controller="some-controller"
  .baz Some text
```

`component.rb`

```
class Foo::Component < ApplicationComponent
  with_component_assets

  def some_method
    ...
  end
end
```

`style.scss`

```
._base {
  @apply flex items-center;
}

.baz {
  @apply m-8;
}
```

Will yield the following raw HTML:

```
<ts-wrapper class="c-foo" data-controller="components--foo">
  <div class="bar" data-controller="some-controller">
    <div class="baz">Some text content</div>
  </div>
</ts-wrapper>
```

...which, once it's been added to the DOM and `connectedCallback` has been called on the `ts-wrapper`, will become this final HTML:

```
<div class="c-foo bar" data-controller="components--foo some-controller">
  <div class="baz">Some text content</div>
</div>
```

...along with the following compiled stylesheet within `application.css`:

```
.c-foo {
  display: flex;
  align-items: center;
}
.c-foo .baz {
  margin: 2rem;
}
```
