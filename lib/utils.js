var isArray = Array.isArray
var isObject = require('is-plain-object')
var assign = require('lodash.assign')

function isRaw(value) {
    return !isArray(value) && !isObject(value);
}

exports.isArray = isArray
exports.isObject = isObject
exports.isRaw = isRaw
exports.assign = assign