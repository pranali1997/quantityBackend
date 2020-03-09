var chai = require('chai');
var chaiHttp = require('chai-http')
var fs = require('fs');
var app = require('../../server.js')

chai.should();
chai.use(chaiHttp);

var file = fs.readFileSync('./service/serviceJSON.json', 'utf-8');
var fileInfo = JSON.parse(file);

describe('api checking', () => {
    describe('test for null input', (done) => {
        chai.request(app)
            .post('/enterValue')
            .send(fileInfo.nullFieldInput)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    })




    describe('test for empty input', () => {
        chai.request(app)
            .post('./enterValue')
            .send(fileInfo.noFieldInput)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    }),

        describe('test for correct input', () => {
            chai.request(app)
                .post('./enterValue')
                .send(fileInfo.correctFieldInput)
                .end((err, res) => {
                    res.body.should.be.a("object")
                })

        })


})