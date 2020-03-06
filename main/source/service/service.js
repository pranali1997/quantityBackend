var quantityJSON = require('../model/quantityMeasureJSON');


module.exports = {
        unitMeasurement(data,callback) {
        unitType1=data.firstUnit
        unitType2=data.secondUnit
        var result, input = data.unitValue;
        console.log(data.firstUnit,'data value');
        

        var keys = Object.keys(quantityJSON.getUnitValues());
        
        for (var i = 0; i < keys.length; i++) {

            if (keys[i] == data.secondUnit) {
                
                var unitKeys = Object.keys(quantityJSON.getUnitValues()[keys[i]])                
                
                for (var j = 0; j < unitKeys.length; j++) {
                    
                    if (unitKeys[j] == data.firstUnit) {

                        result=quantityJSON.getUnitValues()[keys[i]][unitType1]*input;
                                console.log(result);
                                                
                    }
                }
            }

        }
console.log(result);

        return callback(null, result);
    }

}
