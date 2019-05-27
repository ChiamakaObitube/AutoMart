
import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

const { should, expect } = chai;
should();

describe('POST /api/v1/car', () => {
  it('it should create a car ad', (done) => {
    chai.request(app)
      .post('/api/v1/car')
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).be.an('object');
        expect(res.body.message).to.equal('Car Ad posted successfully');
        done();
      });
  });
});
