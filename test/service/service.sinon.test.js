const assert=require('chai').assert;
const sinon=require('sinon').assert;
const service=require('../../main/source/service/service')
const jsonFile=require('../../main/source/model/quantityMeasureJSON')

var data1={
    firstUnit:"INCH",
    secondUnit:"INCH",
    unitValue:0
}

var data2={
    firstUnit:"INCH",
    secondUnit:"FEET",
    unitValue:1
}

describe("quantity measurement sinon testing services",function(){
    // beforeEach(function(){
    //     sinon.stub(jsonFile,'getUnitValues').returns(unitTypes);
    // })

    // afterEach(function(){
    //     jsonFile.getUnitValues.restore();
    // })

    it('Given zero inch should return zero inch',()=>{
    service.unitMeasurement(data1,(err,data)=>{
            if(err){
                console.log(err);
            }            
            assert.equal(data,0);
        });
    })

    // it('given 1 feet should return 12 inch',function(){
    //     var inch1=service.unitMeasurement(unitTypes,(err,data)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //     assert.equal(inch1,in2);

    //         })
    //     });
    });
