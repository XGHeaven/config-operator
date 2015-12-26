var should = require('chai').should()
var Config = require('../')

global.Config = Config
global.should = should

require('./spec/main')
require('./spec/get')
require('./spec/set')
require('./spec/add')
require('./spec/remove')