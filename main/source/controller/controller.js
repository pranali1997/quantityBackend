var service=require('../../source/service/service')

module.exports={
    getConversion(req,res) {
         service.unitMeasurement(req, ((err, data) => {
            if (err) {
                res.status(500) || "something wend wrong"                
                res.send(err)
            }
            console.log(data);
            
            res.send(data)
        }))
    }
}