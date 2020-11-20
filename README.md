# Stimulus Popover

[![](https://img.shields.io/npm/dt/stimulus-popover.svg)](https://www.npmjs.com/package/stimulus-popover)
[![](https://img.shields.io/npm/v/stimulus-popover.svg)](https://www.npmjs.com/package/stimulus-popover)
[![](https://github.com/stimulus-components/stimulus-popover/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-popover)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-popover.svg)](https://github.com/stimulus-components/stimulus-popover)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cbec1815-8e5b-4f45-8cb2-44d24e8c9cf5/deploy-status)](https://stimulus-popover.netlify.com)

## Getting started

A Stimulus controller to deal with HTML popover.

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

### With remote content

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
<div
  data-controller="popover"
  data-popover-url="<%= card_path %>"
>
  You can load popover with AJAX. For instance, this is my
  <a
    href="/profile"
    data-action="mouseover->popover#show mouseout->popover#hide"
  >
    profile card
  </a>
</div>
```

In the card partial `app/views/users/_card.html.erb`:
```html
<div data-target="popover.card">
  <p>This content is loaded with AJAX.</p>
</div>
```

### With local template

```html
<div data-controller="popover">
  This is my Github card available on
  <a
    href="/profile"
    data-action="mouseover->popover#show mouseout->popover#hide"
  >
    Github
  </a>

  <template data-target="popover.content">
    <div data-target="popover.card">
      <p>This content is in a hidden template.</p>
    </div>
  </template>
</div>
```

## Configuration

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-popover-url` | `undefined` | URL to fetch the content. | ✅ |


**Important note**: It's up to **you** to provide the popover style!

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus component:

```js
import Popover from "stimulus-popover"

export default class extends Popover {
  connect() {
    super.connect()
    console.log("Do what you want here.")
  }
}
```

This controller will automatically have access to targets defined in the parent class.

If you override the `connect`, `disconnect` or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

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
