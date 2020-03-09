var quantityJSON = require('../model/quantityMeasureJSON');


module.exports = {
    unitMeasurement(obj, callback) {
        unit = obj.unit
        unitType1 = obj.unitType1
        unitType2 = obj.unitType2
        var input = obj.input;
        var result;



        var result = quantityJSON.getUnitValues()[unit][unitType2][unitType1] * input
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
