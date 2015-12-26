describe('add method', function () {
    var config;
    
    beforeEach(function () {
        config = new Config({
            key1: 'value1',
            array1: ['array1'],
            object1: {
                key1: 'value1'
            }
        })
    })
    
    it('add a value to undefined, should create it', function() {
        config.add('key2', 'value2');
        config.add('array2', ['array2']);
        config.add('object2', {key: 'value'})
        config.add('object3', 'key', 'value')
        
        config.get('key2').should.be.string
        config.get('array2').should.be.array
        config.get('object2').should.be.object
        config.get('object3').should.be.object
    })
    
    it('add a raw value to raw value should change to array', function () {
        config.add('key1', 'value2')
        config.get('key1').should.be.eql(['value1', 'value2'])
    })
    
    it('add a array value to raw value should change toray', function () {
        config.add('key1', ['value2', 'value3'])
        config.get('key1').should.be.eql(['value1', 'value2', 'value3'])
    })
    
    it('add a array value to array value should append to it', function () {
        config.add('array1', ['array2'])
        config.get('array1').should.be.eql(['array1', 'array2'])
    })
    
    it('add a key,value to object should be added', function () {
        config.add('object1', 'key2', 'value2')
        config.get('object1').should.be.contains({
            key2: 'value2'
        })
    })
    
    it('otherwise is undefined')
})