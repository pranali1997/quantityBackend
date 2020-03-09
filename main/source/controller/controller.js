var service = require('../service/service')

module.exports = {
    getConversion(req, res) {
        try {
            let obj = {
                unit:req.body.unit,
                unitType1: req.body.firstUnit,
                unitType2: req.body.secondUnit,
                input: req.body.unitValue1
            }
console.log(req.body);

            
            let response = {}

            service.unitMeasurement(obj, ((err, data) => {
                if (err) {
                    response = {
                        success: "false",
                        message: "something went wrong",
                    }
                    res.status(500).send(response);

                    
                } else {
                    response = {
                        success: "true",
                        message: "successfully calculated",
                        data: data
                    }
                    console.log("response--> ", response);

                    res.status(200).send(response)
                }
            }))
        } catch (err) {
            res.status(500).send({ message: "internal error" })
        }
    },

    getUnits(req,res) {
        try{
                  
            
            let obj = {
                unit:req.params.key
            }
            console.log("controller",req.params.key);
            
            service.getUnits(obj,(err,data)=>{

                if(err){
                    response={
                        success:"false",
                        message:"something went wrong"
                    }                    
                    res.status(500).send(response);
                }else{
                   
                    res.status(200).send({data})
                }
            })
        } catch(err){
            console.log(err);
            
            res,status(500).send({message: " internal error"})
        }

    },

    getUnitValues(req,res){

        var unitValue=service.getUnitValues()
        res.send(unitValue)
    }
}