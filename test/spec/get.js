describe('get method', function() {
    var config;
    
    beforeEach(function() {
        config = new Config({
            key1: 'value1',
            key2: 'value2'
        })
    })
    
    it('get valid key', function() {
        config.get('key1').should.be.equal('value1')
    })
})