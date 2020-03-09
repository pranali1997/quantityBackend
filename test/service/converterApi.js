var chai= require('chai');
var chaiHttp=require('chai-http')
var fs = require('fs');
var app=require('../../server.js')

chai.should();
chai.use(chaiHttp);

var file=fs.readFileSync('./service/serviceJSON.json','utf-8');
var fileInfo=JSON.parse(file);

describe('api checking', () => {
    describe('test for null login', (done) => {
        chai.request(app)
        .post('/enterValue')
        .send(info.nullFieldInput)
        .end((err,res)=>{
            res.should.have.status(422);
            done();
        })
    })
    
    
})
