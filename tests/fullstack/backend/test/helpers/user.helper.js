const Chai = require('chai');
const bcrypt = require('bcrypt-nodejs');
const Sinon = require('sinon');
const UserHelper = require('../../src/helpers/user.helper');
const User = require('../../src/models').User;
describe('User Helper', () => {
  describe('Find User', () => {
    describe('Get All User', () => {
      afterEach((done) => {
        User.findAll.restore();
        done();
      });
      it('Returns an array of users', (done) => {
        Sinon.stub(User, 'findAll').returns(Promise.resolve([
          { 'id': 1, 'fname': 'foo', 'lname': 'bar' },
          { 'id': 2, 'fname': 'foo2', 'lname': 'bar2' }
        ]));
        UserHelper.FindUser()
        .then((users) => {
          Chai.expect(users).not.equal(null);
          Chai.expect(users.length).equal(2);
          done();
        });
      });
      it('Returns an error', (done) => {
        Sinon.stub(User, 'findAll').returns(Promise.reject('some error'));
        UserHelper.FindUser()
        .catch((err) => {
          Chai.expect(err).not.equal(null);
          Chai.expect(err).equal('some error');
          done();
        });
      });
    });
    describe('Get User By Id', () => {
      afterEach((done) => {
        User.findOne.restore();
        done();
      });
      it('Returns an error', (done) => {
        Sinon.stub(User, 'findOne').returns(Promise.reject('some error'));
        UserHelper.FindUser(1)
        .catch((err) => {
          Chai.expect(err).not.equal(null);
          Chai.expect(err).equal('some error');
          done();
        });
      });
      it('Returns a user', (done) => {
        Sinon.stub(User, 'findOne').returns(Promise.resolve({
          'id': 1, 'fname': 'foo', 'lname': 'bar'
        }));
        UserHelper.FindUser(1)
        .then((user) => {
          Chai.expect(user).not.equal(null);
          Chai.expect(user).to.deep.equal({ 'id': 1, 'fname': 'foo', 'lname': 'bar' });
          done();
        });
      });
    });
    describe('Create User by Input', () => {
      afterEach((done) => {
        User.create.restore();
        bcrypt.genSalt.restore();
        bcrypt.hashSync.restore();
        done();
      });
      it('Returns an error', (done) => {
        Sinon.stub(User, 'create').returns(Promise.reject('some error'));
        Sinon.stub(bcrypt, 'genSalt').returns('somestring');
        Sinon.stub(bcrypt, 'hashSync').returns('someencryptedstrings');
        UserHelper.CreateUser({ 'id': 1, 'fname': 'foo', 'lname': 'bar' })
        .catch((err) => {
          Chai.expect(err).not.equal(null);
          Chai.expect(err).equal('some error');
          done();
        });
      });
      it('Returns new User', (done) => {
        Sinon.stub(User, 'create').returns(Promise.resolve({ 'id': 1, 'fname': 'foo', 'lname': 'bar', 'password': 'someencryptedstrings' }));
        Sinon.stub(bcrypt, 'genSalt').returns('somestring');
        Sinon.stub(bcrypt, 'hashSync').returns('someencryptedstrings');
        UserHelper.CreateUser({ 'id': 1, 'fname': 'foo', 'lname': 'bar', 'password': 'password' })
        .then((user) => {
          Chai.expect(user).not.equal(null);
          Chai.expect(user).to.deep.equal({ 'id': 1, 'fname': 'foo', 'lname': 'bar', 'password': 'someencryptedstrings' });
          done();
        });
      });
    });
  });
});