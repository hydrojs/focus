[![NPM
version](https://badge.fury.io/js/hydro-focus.png)](http://badge.fury.io/js/hydro-focus)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-focus.png)](http://travis-ci.org/hydrojs/hydro-focus)

# hydro-focus

## Synopsis

Run only the first test with "focus" tag

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-focus']
});
```

With meta tag:

```js
test('focus method on test', 'focus', function() {
});
```

By invoking a method:

```js
test('focus method on test', function() {
}).focus();
```

## Installation

#### npm:

```bash
npm install hydro-focus
```

#### component:

```bash
component install hydrojs/hydro-focus
```

#### standalone:

```bash
<script src="hydro-focus.js"></script>
```

## Tests

```bash
$ npm test
```

## License

The MIT License (see LICENSE)
