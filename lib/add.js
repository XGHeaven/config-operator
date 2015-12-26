var utils = require('./utils')

module.exports = function(name, key, value) {
    var config = this.config;
    if (!config.hasOwnProperty(name) || config[name] === void 0) return this.set(name, key, value);
    
    if (arguments.length === 3) {
        var temp = {}
        temp[key] = value;
        if (utils.isObject(config[name]))
            return utils.assign(config[name], temp)
        return void 0;
    }
    
    // only two args, for semantic
    value = utils.isArray(key) ? key : [key];
    
    if (utils.isRaw(config[name])) {
        config[name] = [config[name]]
    }
    return config[name] = config[name].concat(value)
}