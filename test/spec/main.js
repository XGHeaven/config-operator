describe('constructor', function() {
    it('instance without new', function() {
        Config().should.instanceof(Config);
    })
    
    it('instance without new in strict', function() {
        'use strict';
        Config().should.instanceof(Config);
    })
})