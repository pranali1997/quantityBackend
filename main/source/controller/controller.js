var service=require('../../source/service/service')

module.exports={
    getConversion(req,res) {
         service.unitMeasurement(req, ((err, data) => {             
            if (err) {
                console.log("something went wrong");
                
            }
           
            res.status(200).send(data.toString())
        }))
    }
}