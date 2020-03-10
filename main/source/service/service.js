var quantityJSON = require('../model/quantityMeasureJSON');


module.exports = {
    unitMeasurement(obj, callback) {
        unit = obj.unit
        unitType1 = obj.unitType1
        unitType2 = obj.unitType2
        var input = obj.input;
        var result;

        if(unit == undefined || unitType1==undefined || unitType2==undefined || input==undefined)
        {
            console.log("data should not be empty");
        }
        if(unit==null || unitType1==null || unitType2==null || input==null){
            console.log("data should not be null");            
        }
        if(NaN(input)){
            console.log('value must be a number');
        }

        result = quantityJSON.getUnitValues()[unit][unitType2][unitType1] * input

        if(unit=="TEMPERATURE" && unitType2=="FAHRENHEIT"){
            result=(input-32)*5/9
         }
 
         if(unit=="TEMPERATURE" && unitType2=="CELSIUS"){
             result=(input*9/5)-32
         }
        
        return callback(null, result);
    },

    getUnits(obj, callback) {
        var unitKeysVal;
        
        var a = obj.unit
        
        var unitKeys = Object.keys(quantityJSON.getUnitValues())
console.log(unitKeys);

        for (let i = 0; i < unitKeys.length; i++) {

            if (unitKeys[i] == obj.unit)
                unitKeysVal = Object.keys(quantityJSON.getUnitValues()[unitKeys[i]])
        }
        
        return callback(null, unitKeysVal);
    },

    getUnitValues() {
        var unitKeys = Object.keys(quantityJSON.getUnitValues())

        return unitKeys
    }


}
