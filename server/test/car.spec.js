
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
describe('/GET /api/v1/car', () => {
  it('it should get all cars whether sold or available', (done) => {
    chai.request(app)
      .get('/api/v1/car')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        expect(res.body.message).to.equal('All Car Ads retrieved successfully');
        done();
      });
  });

  it('it should get a specific car by their id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/car/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        expect(res.body.message).to.equal('Car Ad retrieved successfully');
        done();
      });
  });
});
describe('PATCH /api/v1/car/:id/status', () => {
  it('it should mark a car as sold', (done) => {
    const id = 1;
    chai.request(app)
      .delete(`/api/v1/car/${id}/status`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.equal('car successfully marked as sold');
        done();
      });
  });
});
describe('/DELETE a car by their id', () => {
  it('it should delete a car by their id', (done) => {
    const id = 1;
    chai.request(app)
      .delete(`/api/v1/car/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(202);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
