describe('set method', function() {
    var config;
    
    beforeEach(function() {
        config = new Config({
            key1: 'value1'
        })
    })
    
    it('set a does not exist value', function() {
        config.set('key2', 'value2').should.be.equal('value2');
        config.get('key2').should.be.equal('value2')
    })
    
    it('just pass a args should return undefined', function() {
        should.not.exist(config.set('key2'));
    })
    
    it('override value', function() {
        config.get('key1').should.be.equal('value1');
        config.set('key1','new value');
        config.get('key1').should.be.equal('new value');
    })
    
    it('pass name, key, value will auto wrapped to a object, and set it', function() {
        config.set('object1', 'key', 'value').should.be.eql({
            key: 'value'
        })
        config.get('object1').should.be.eql({
            key: 'value'
        })
    })
})