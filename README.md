# Stimulus Popover

[![](https://img.shields.io/npm/dt/stimulus-popover.svg)](https://www.npmjs.com/package/stimulus-popover)
[![](https://img.shields.io/npm/v/stimulus-popover.svg)](https://www.npmjs.com/package/stimulus-popover)
[![](https://github.com/stimulus-components/stimulus-popover/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-popover)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-popover.svg)](https://github.com/stimulus-components/stimulus-popover)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cbec1815-8e5b-4f45-8cb2-44d24e8c9cf5/deploy-status)](https://stimulus-popover.netlify.com)

## Getting started

A Stimulus controller to deal with HTML popover.

This controller is using [Tippy](https://atomiks.github.io/tippyjs/) behind the scene.

## Installation

```bash
$ yarn add stimulus-popover
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import Popover from "stimulus-popover"

const application = Application.start()
application.register("popover", Popover)
```

## Usage

In your controller:
```ruby
class UsersController < ApplicationController
  def card
    render partial: 'users/card', locals: { user: @user }
  end
end
```

In your routes:
```ruby
Rails.application.routes.draw do
ressources
  get :card, to: 'users#card'
end
```

In your view:

With server rendered content on the fly:
```html
<div>
  You can load popover with AJAX. For instance, this is my
  <a
    href="/profile"
    data-controller="popover"
    data-action="mouseover->popover#mouseOver"
    data-popover-url="<%= card_path %>"
  >
    profile card
  </a>
</div>
```

With static html:
```html
<div data-controller="popover">
  This is my Github card available on
  <a
    href="/profile"
    data-action="mouseover->popover#mouseOver"
  >
    Github
  </a>

  <template data-target="popover.content">
    <p>This is the popover content.</p>
  </template>
</div>
```

## Configuration

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-popover-url` | `undefined` | URL to fetch the content. | ✅ |

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus components.

```js
import Popover from "stimulus-popover"

export default class extends Popover {
  connect() {
    super.connect()
    console.log("Do what you want here.")

    // Get tippy options. Override this method if needed.
    this.tippyOptions
  }
}
```

These controllers will automatically have access to targets defined in the parent class.

If you override the connect, disconnect or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Project setup
```bash
$ yarn install
$ yarn dev
```

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
