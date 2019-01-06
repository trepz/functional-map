# functional-map

[![Build Status](https://travis-ci.org/trepz/functional-map.svg?branch=master)](https://travis-ci.org/trepz/functional-map)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Extend javascript's Map object with higher-order functions.

Includes `.map`, `.filter` (which return a new Map) and `.reduce` methods.

```javascript
import Map from 'functional-map'

const nmap = new Map([[1, 2], [2, 3], [3, 4]])
    .filter((value, key) => key < 3)
    .map(value => value.toString())
    .reduce((acc, current, key) => ({ ...acc, [key]: current }), {})
```

## Install

```
yarn add functional-map
```

or

```
npm i functional-map
```

## Import

```javascript
// es2015
import Map from 'functional-map'

// commonJS
const Map = require('functional-map').default
```
