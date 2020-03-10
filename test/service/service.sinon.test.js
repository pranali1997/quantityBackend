const assert = require('chai').assert;
const sinon = require('sinon').assert;
const service = require('../../main/source/service/service')
const jsonFile = require('../../main/source/model/quantityMeasureJSON')

var data1 = {
    firstUnit: "INCH",
    secondUnit: "INCH",
    unitValue: 0
}

var data2 = {
    firstUnit: "INCH",
    secondUnit: "FEET",
    unitValue: 1
}

var data3 = {
    firstUnit: "INCH",
    secondUnit: "FEET",
    unitValue: null
}

var data4 = {
    firstUnit: "INCH",
    secondUnit: "FEET",
    unitValue: "string"
}

var data5 = {
    firstUnit: "INCH",
    secondUnit: "FEET",
    unitValue: ""
}


describe("quantity measurement sinon testing services", function () {
    beforeEach(function () {
        sinon.stub(jsonFile, 'getUnitValues').returns(data1);
    })

    afterEach(function () {
        jsonFile.getUnitValues.restore();
    })

    it('Given zero inch should return zero inch', () => {
        sinon.stub(jsonFile, 'getUnitValues').returns(data1);

        service.unitMeasurement(data1, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(data, 0);
        });
        jsonFile.getUnitValues.restore();
    })

    it('given 1 feet should return 12 inch', function () {
        sinon.stub(jsonFile, 'getUnitValues').returns(data2);

        var inch1 = service.unitMeasurement(data2, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(inch1, in2);

        });
        jsonFile.getUnitValues.restore();
    })

    it('given null feet value should return undefined', function () {
        sinon.stub(jsonFile, 'getUnitValues').returns(data3);

        var inch1 = service.unitMeasurement(data3, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(inch1, undefined);

        });
        jsonFile.getUnitValues.restore();
    }),

    it('given string value of feet should refurn undefined', function () {
        sinon.stub(jsonFile, 'getUnitValues').returns(data4);

            var inch = service.unitMeasurement(data4, (err, data) => {
                if (err) {
                    console.log(err);
                }
                assert.equal(inch, undefined);

            })
            jsonFile.getUnitValues.restore();
        }),

    it('given feet empty feet value should return undefined', function(){
        sinon.stub(jsonFile, 'getUnitValues').returns(data5);

        var inch=service.unitMeasurement(data5,(err,data)=>{
            if(err){
                console.log(err);
            }
            assert.equal(inch,undefined)

        })
        jsonFile.getUnitValues.restore();
    })
});
