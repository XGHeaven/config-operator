var utils = require('./utils')

module.exports = function(name, key) {
    var config = this.config;
    var temp;
    
    if (arguments.length === 1) {
        temp = config[name]
        delete config[name]
        return temp
    }
    
    if (utils.isArray(config[name])) {
        temp = config[name].indexOf(key)
        temp = config[name][key]
        
        config[name].splice(temp, 1)
        
        return temp
    }
    
    if (utils.isObject(config[name])) {
        temp = config[name][key]
        delete config[name][key]
        return temp
    }
    
    return void 0
}