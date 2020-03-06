var assert = require('chai').assert;
var controller = require('../../main/source/controller/controller')
var quantityService = require('../../main/source/service/service')
var sinon = require('sinon');

describe('Quantity measurement sinon testing', function () {

    req = {
        FEET: 12
    }

    res = {
        send: function () { }
    }

    // beforeEach(function () {
    //     sinon.stub(quantityService, 'quantityService').yields(null, "hey")
    // })


    it('when given request and response should be verified', function () {
        sinon.stub(quantityService, 'quantityService').yields(null,"hey")
        let mock = sinon.mock(res);
        mock.expects('send').once().withExactArgs("hey")
        controller.getConversion(req, res);
        mock.verify();
    });
})