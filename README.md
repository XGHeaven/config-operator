Introduce
--- 

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