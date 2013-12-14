[![NPM
version](https://badge.fury.io/js/hydro-focus.png)](http://badge.fury.io/js/hydro-focus)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-focus.png)](http://travis-ci.org/hydrojs/hydro-focus)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-focus/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-focus?branch=master)

# hydro-focus

## Synopsis

Run only the first test with "focus" tag

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-focus'],
  focus: true
});
```

CLI:

```bash
$ hydro --focus
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

Coverage:

```bash
$ npm run coverage
```

## License

The MIT License (see LICENSE)
