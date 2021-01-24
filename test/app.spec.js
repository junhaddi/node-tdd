const should = require('chai').should();
const app = require('../app');

describe('# App test', function () {
  describe('# sayHello', function () {
    it('should return Hello World!', function () {
      app.sayHello().should.equal('Hello World!');
    });
    it('should a string type', function () {
      app.sayHello().should.be.a('string');
    });
  });

  describe('# addNumbers', function () {
    it('should greater than 5', function () {
      app.addNumbers(3, 4).should.be.above(5);
    });
  });
});
