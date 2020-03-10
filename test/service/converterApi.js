var chai = require('chai');
var chaiHttp = require('chai-http')
var fs = require('fs');
var app = require('../../server.js')

chai.should();
chai.use(chaiHttp);

var file = fs.readFileSync('./service/serviceJSON.json', 'utf-8');
var fileInfo = JSON.parse(file);


describe('api checking /value', () => {
    it('test for null input', (done) => {
        chai.request(app)
            .post('/value')
            .send(fileInfo.nullFieldInput)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    })

    it('test for empty input', () => {
        chai.request(app)
            .post('./value')
            .send(fileInfo.noFieldInput)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    }),

        it('test for correct input', () => {
            chai.request(app)
                .post('./value')
                .send(fileInfo.correctFieldInput)
                .end((err, res) => {
                    res.body.should.be.a("object");
                    done();
                })

        }),

        it('test for null api value ', (done) => {
            chai.request(app)
                .post('/')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                })
        }),

        it('test for wrong api', (done) => {
            chai
                .post('/abc')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        }),

        it('test for empty api', (done) => {
            chai.request(app)
                .get('')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });

        }),

        it('test for wrong object', (done) => {
            chai.request(app)
                .get('/value')
                .send(fileInfo.wrongUnit)
                .end((err, res) => {
                    res.should.have.status(500);
                    done();
                });

        })

})

describe('api checking for /main ', function () {
    it('test for null input', (done) => {
        chai.request(app)
            .get('/main')
            .send(fileInfo.nullFieldInput)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    })

    it('test for null api value ', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    }),

        it('test for wrong api', (done) => {
            chai
                .get('/abc')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        }),

        it('test for empty api', (done) => {
            chai.request(app)
                .get('')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });

        })
})


describe('api checking for /main ', function () {
    it('test for null input', (done) => {
        chai.request(app)
            .get('/findKeys/:key')
            .send(fileInfo.nullFieldInput)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            })
    })

    it('test for null api value ', (done) => {
        chai.request(app)
            .get('/findKeys/')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    }),

        it('test for wrong api', (done) => {
            chai
                .get('/abc')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        }),

        it('test for empty api', (done) => {
            chai.request(app)
                .get('/findKeys')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });

        })
})