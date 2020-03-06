
module.exports=(app)=>{
    const controller = require('../controller/controller');

    app.get('/enterValue',controller.getConversion)

}