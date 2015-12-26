module.exports = function(name, key, value) {
    arguments.length === 3 && (key = {key: value})
    
    return this.config[name] = key;
}