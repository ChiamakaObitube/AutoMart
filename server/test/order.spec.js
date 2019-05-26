import chai from 'chai';
import 'chai/register-should';

import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

const { should, expect } = chai;
should();


describe('POST api/v1/order', () => {
  it('user(buyer) can make a purchase order', (done) => {
    const validOrder = {
      car_id: 1,
      buyer: Number,
      created_on: Date(),
      status: 'pending',
      state: 'new',
      price: 400000.00,
      priceOffered: 30000000.00,

    };
    chai.request(app)
      .post('/api/v1/order')
      .send(validOrder)
      .end((err, res) => {
        expect(res).to.have.status(201);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Purchase order created successfully.');
        done();
      });
  });
});

describe('/GET /api/v1/order', () => {
  it('it should get all orders whether accepted or pending', (done) => {
    chai.request(app)
      .get('/api/v1/order')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        done();
      });
  });
});
describe('/GET /api/v1/order/<order:id>', () => {
  it('it should get a specific order by their id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/order/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        done();
      });
  });
});
