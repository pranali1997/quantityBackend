
module.exports=(app)=>{
    const controller = require('../controller/controller');

    app.post('/enterValue',controller.getConversion)
    app.get('/findKeys/:key',controller.getUnits)
    app.get('/main',controller.getUnitValues)

}