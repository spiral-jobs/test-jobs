const Chai = require('chai');
const Auth = require('../../src/api/auth');
const UserHelper = require('../../src/helpers/user.helper');
const JwtService = require('../../src/services/jwt.service');
const Passport = require('passport');
const Sinon = require('sinon');

const assert = Chai.assert;

describe('Auth Api', () => {
  var request, response;
  describe('Sign In', () => {
    beforeEach((done) => {
      request = {
        'user': {
          'id': 1
        }
      };
      response = {
        
      };
      done();
    });
    afterEach((done) => {
      UserHelper.FindUser.restore();
      JwtService.tokenForUser.restore();
      done();
    });
    it('returns user', (done) => {
      Sinon.stub(UserHelper, 'FindUser').returns(Promise.resolve({'id': '1', 'fname': 'some name'}));
      Sinon.stub(JwtService, 'tokenForUser').returns('some token');
      Auth.SignIn(request, response, () => {})
      .then(() => {
        Chai.expect(request.data).not.equal(null);
        Chai.expect(request.data.user).to.deep.equal({ 'id': '1', 'fname': 'some name' });
        Chai.expect(request.data.token).equal('some token');
        done();
      });
    });
    it('returns token', (done) => {
      Sinon.stub(UserHelper, 'FindUser').returns(Promise.resolve({'id': '1', 'fname': 'some name'}));
      Sinon.stub(JwtService, 'tokenForUser').returns('some token');
      Auth.SignIn(request, response, () => {})
      .then(() => {
        Chai.expect(request.data.token).equal('some token');
        done();
      });
    });
    it('returns error', (done) => {
      Sinon.stub(UserHelper, 'FindUser').returns(Promise.reject('some error'));
      Sinon.stub(JwtService, 'tokenForUser').returns('some token');
      Auth.SignIn(request, response, (err) => {
        Chai.expect(err).not.equal(null);
        Chai.expect(err.Error).equal('some error');
      })
      .catch(() => {
        done();
      });
    });
  });
  describe('Signup', () => {
    var request, response;
    beforeEach((done) => {
      request = {
        body: {
          lname: 'foo',
          fname: 'bar',
          phoneNumber: '1234',
          email: 'someEmail',
          password: 'somePassword'
        }
      };
      response = {};
      done();
    });
    afterEach((done) => {
      UserHelper.CreateUser.restore();
      done();
    });
    it('Returns an error', (done) => {
      Sinon.stub(UserHelper, 'CreateUser').returns(Promise.reject('some error'));
      Auth.SignUp(request, response, (err) => {
        Chai.expect(err.statusChai).equal(500);
        done();
      })
      .catch((err) => {
        Chai.expect(err).not.equal(null);
        done();
      });
    });
    it('Returns a null user', (done) => {
      Sinon.stub(UserHelper, 'CreateUser').returns(Promise.resolve(null));
      Auth.SignUp(request, response, (err) => {
        Chai.expect(err.statusChai).equals(422);
        done();
      })
      .catch((err) => {
        Chai.expect(err).not.equal(null);
        done();
      });
    });
    it('Returns a user', (done) => {
      Sinon.stub(UserHelper, 'CreateUser').returns(Promise.resolve({
        id: 1,
        lname: 'foo',
        fname: 'bar',
        phoneNumber: '1234',
        email: 'someEmail'
      }));
      Sinon.stub(UserHelper, 'FindUser').returns(Promise.resolve({
        id: 1,
        lname: 'foo',
        fname: 'bar',
        phoneNumber: '1234',
        email: 'someEmail'
      }));
      Auth.SignUp(request, response, (err) => {})
      .then(() => {
        Chai.expect(request.data.user).to.deep.equal({
          id: 1,
          lname: 'foo',
          fname: 'bar',
          phoneNumber: '1234',
          email: 'someEmail'
        });
        UserHelper.FindUser.restore();
        done();
      });
    });
  });
});