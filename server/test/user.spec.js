import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';

import {
  validUser,
  undefinedFirstName,
  nonStringFirstName,
  invalidFirstNameCharacter,
  invalidFirstNameLength,
  undefinedLastName,
  nonStringLastName,
  invalidLastNameCharacter,
  invalidLastNameLength,
  undefinedEmail,
  nonStringEmail,
  undefinedAddress,
  nonStringAddress,
  undefinedPassword,
  nonStringPassword,
  invalidPasswordLength,
  whitespacePassword,
  validSignIn,
  undefinedEmailSignin,
  nonStringEmailSignin,
  undefinedPasswordSignin,
  nonStringPasswordSignin,
} from './mockData/userMock';

chai.use(chaiHttp);
const {
  should,
  expect,
} = chai;
should();


describe('Tests for landing page', () => {
  it('should return 200 success status', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Welcome to AutoMart');
        done();
      });
  });
});

describe('POST/auth/signup', () => {
  it('Should create a new user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(validUser)
      .end((err, res) => {
        expect(res).to.have.status(201);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Account created successfully.');
        done();
      });
  });

  // tests for  first name input
  it('should return 400 status for undefined first name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedFirstName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('First name is required');
        done();
      });
  });

  it('should return 400 status for non string first name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(nonStringFirstName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('First name must be a string');
        done();
      });
  });
  it('should return 400 status for invalid first Name length', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidFirstNameLength)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('First name must be an alphabet with length 2 to 25');
        done();
      });
  });
  it('should return 400 status for invalid first Name character', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidFirstNameCharacter)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('First name must be an alphabet with length 2 to 25');
        done();
      });
  });

  // test for last name inputs
  it('should return 400 status for undefined last name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedLastName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('Last name is required');
        done();
      });
  });

  it('should return 400 status for non string last name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(nonStringLastName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('Last name must be a string');
        done();
      });
  });
  it('should return 400 status for invalid Last Name length', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidLastNameLength)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('Last name must be an alphabet with length 2 to 25');
        done();
      });
  });
  it('should return 400 status for invalid Last Name character', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidLastNameCharacter)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('Last name must be an alphabet with length 2 to 25');
        done();
      });
  });
  // test for email inputs
  it('should return 400 status for undefined email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedEmail)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('your email is required');
        done();
      });
  });

  it('should return 400 status for non string email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(nonStringEmail)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('email must be a string');
        done();
      });
  });
  // Test for address input
  it('should return 400 status for undefined address', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedAddress)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('your address is required');
        done();
      });
  });

  it('should return 400 status for non string address', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(nonStringAddress)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('address must be a string');
        done();
      });
  });

  // Test for password
  it('should return 400 status for undefined Password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedPassword)
      .end((err, res) => {
        expect(res).to.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('your password is required');
        done();
      });
  });

  it('should return 400 status for non string Password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(nonStringPassword)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('password must be a string');
        done();
      });
  });
  it('should return 400 status for white space password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(whitespacePassword)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('password cannot contain spaces');
        done();
      });
  });
  it('should return 400 status for invalid password length', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidPasswordLength)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('password should be 5 to 30 characters long');
        done();
      });
  });
});
describe('POST/auth/signin', () => {
  it('Should sign in existing user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(validSignIn)
      .end((err, res) => {
        expect(res).to.have.status(201);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('user logged in successfully');

        done();
      });
  });
  it('Should return 400 status for undefined email sign in', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(undefinedEmailSignin)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('your email is required');
        done();
      });
  });

  it('should return 400 status for a non string Email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(nonStringEmailSignin)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('email must be a string');
        done();
      });
  });


  // Tests for password
  it('should return 400 status for Undefined Password Signin', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(undefinedPasswordSignin)
      .end((err, res) => {
        expect(res).to.have.status(400);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('your password is required');
        done();
      });
  });

  it('should return 400 status for a non string Password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(nonStringPasswordSignin)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('password must be a string');
        done();
      });
  });
  it('should return 400 status for invalid password length', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(invalidPasswordLength)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('password should be 5 to 30 characters long');
        done();
      });
  });
});
describe('/GET /api/v1/users', () => {
  it('it should get all users whether buyer or seller', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        done();
      });
  });
});
