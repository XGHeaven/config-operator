Introduce
--- 

[![Build Status](https://img.shields.io/travis/XGHeaven/config-operator.svg?style=flat-square)](https://travis-ci.org/XGHeaven/config-operator)
[![npm](https://img.shields.io/npm/v/config-operator.svg?style=flat-square)](https://www.npmjs.com/package/config-operator)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://www.npmjs.com/package/config-operator)
[![Coveralls](https://img.shields.io/coveralls/XGHeaven/config-operator.svg?style=flat-square)]()

This a configure file manager.

Feature
---

1. Support all method for `configstore`, except `all`
2. Support `add` method, It can upgrade from `String`/`Number` to `Array`/`Object`

Usage
---

```
npm install config-operator
```

```javascript
var Config = require('config-operator')

var config = new Config()

config.set('key', 'value')
// {key: 'value'}
config.add('key', 'value2')
// {key: ['value', 'value2']
config.get('key')
// {key: ['value', 'value2']
config.remove('key', 'value')
// {key: ['value2']}
config.remove('key')
// {}
```

API
---

#### Config(config)

- config
    config object

- return
    config instance

#### Config#get(name)

#### Config#set(name, key [,value])

#### Config#add(name, key [,value])

#### Config#remove(name [,key])