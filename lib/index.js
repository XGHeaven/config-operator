'use strict';

var utils = require('./utils')

function ConfigOperator(config) {
    if (this === global || this === void 0) return new ConfigOperator(config);
    
    config = config || {};
    
    this.config = config;
}

module.exports = ConfigOperator;

utils.assign(ConfigOperator.prototype, {
    'get': require('./get'),
    'set': require('./set'),
    'add': require('./add'),
    'remove': require('./remove')
})