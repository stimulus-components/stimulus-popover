# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.0.0] - 2020-12-05

### Added

- Support for Stimulus 2.0
- Prevent error if the url is empty when using remote card.

### Changed

- **Breaking** Using the new `values` static property

```diff
- <div data-controller="popover" data-popover-url="/card.html">
+ <div data-controller="popover" data-popover-url-value="/card.html">
```

- **Breaking** Using the new syntax for `targets`.

```diff
- <div data-controller="popover" data-target="popover.card">
+ <div data-controller="popover" data-popover-target="card">
```

## [3.0.0] - 2020-11-18

### Changed
**Breaking** - Removing Tippy as dependency.
**Breaking** - Rename `mouseOver` to `show`.

### Added
- Add `hide` action.

## [2.0.0] - 2020-11-10
### Added
- Adding `tippyOptions` getter to simply override default options.
- `tippy` instance is now a singleton.
- Destroy `tippy` instance on disconnect.

### Changed
**Breaking** - Removing `mouseOut` action.
**Breaking** - `popover` action does not return a new `tippy` instance.

## [1.0.0] - 2020-10-20

### Added

- Adding controller
