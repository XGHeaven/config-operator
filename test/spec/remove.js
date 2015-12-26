describe('remove method', function () {
    var config;
    
    beforeEach(function() {
        config = new Config({
            key1: 'value1',
            array1: ['array1','array2'],
            object1: {
                key1: 'value1',
                key2: 'value2'
            }
        })
    })
    
    it('direct remove with key', function () {
        config.remove('key1')
        should.not.exist(config.get('key1'))
    })
    
    it('remove from array', function() {
        config.remove('array1', 'array1')
        config.get('array1').should.be.eql(['array2'])
    })
    
    it('remove from object', function () {
        config.remove('object1', 'key1')
        config.get('object1').should.be.eql({
            key2: 'value2'
        })
    })
    
    it('otherwise undefined')
})