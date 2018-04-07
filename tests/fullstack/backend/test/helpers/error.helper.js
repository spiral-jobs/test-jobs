const Chai = require('chai');
const ErrorHelper = require('../../src/helpers/error.helper');

describe('Error Helper', () => {
  describe('Client Error', () => {
    it('Returns status 400', (done) => {
      const error = ErrorHelper.clientError('some error');
      Chai.expect(error.statusCode).equal(400);
      done();
    });
  });
});
