var quantityJSON = require('../model/quantityMeasureJSON');


module.exports = {
    unitMeasurement(data, callback) {
        
        unitType1 = data.body.firstUnit
        unitType2 = data.body.secondUnit
        var result, input = data.body.unitValue;
        console.log(data.body.firstUnit, 'data value');


        var keys = Object.keys(quantityJSON.getUnitValues());

        for (var i = 0; i < keys.length; i++) {

            
            if (keys[i] == unitType2) {
                
                var unitKeys = Object.keys(quantityJSON.getUnitValues()[keys[i]])

                for (var j = 0; j < unitKeys.length; j++) {

                    if (unitKeys[j] == unitType1) {

                        result = quantityJSON.getUnitValues()[keys[i]][unitType1] * input;
                        console.log('result is',result);

                    }
                }
            }

        }
        return callback(null, result);
    }

}
