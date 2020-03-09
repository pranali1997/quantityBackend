var quantityJSON = require('../model/quantityMeasureJSON');


module.exports = {
    unitMeasurement(obj, callback) {
        unit = obj.unit
        unitType1 = obj.unitType1
        unitType2 = obj.unitType2
        var input = obj.input;
        var result;



        var result = quantityJSON.getUnitValues()[unit][unitType2][unitType1] * input
        console.log(result);



        // var keys = Object.keys(quantityJSON.getUnitValues());

        // for (var i = 0; i < keys.length; i++) {

        //     if (keys[i] == unit) {

        //         var unitKeys = Object.keys(quantityJSON.getUnitValues()[keys[i]])

        //         for (var j = 0; j < unitKeys.length; j++) {

        //             if (unitKeys[j] == unitType2) {

        //                 var unitTypeKeys = Object.keys(quantityJSON.getUnitValues()[keys[i]][unitKeys[j]])

        //                 for (let k = 0; k < unitTypeKeys.length; k++) {


        //                     if (unitKeys[k] == unitType1) {

        //                         result = quantityJSON.getUnitValues()[keys[i]][unitType2][unitType1] * input;
        //                     }
        //                 }
        //             }
        //         }
        //     }

        // }
        return callback(null, result);
    },

    getUnits(obj, callback) {
        var unitKeysVal;
        console.log('obj in service is       ',obj);
        
        var a = obj.unit
        console.log("sdfgj",a);
        
        var unitKeys = Object.keys(quantityJSON.getUnitValues())
console.log(unitKeys);

        for (let i = 0; i < unitKeys.length; i++) {

            if (unitKeys[i] == obj.unit)
                unitKeysVal = Object.keys(quantityJSON.getUnitValues()[unitKeys[i]])
        }
        console.log("sdfgh",unitKeysVal);
        
        return callback(null, unitKeysVal);
    },

    getUnitValues() {
        var unitKeys = Object.keys(quantityJSON.getUnitValues())
        console.log('unit values are -------->',unitKeys);

        return unitKeys
    }


}
