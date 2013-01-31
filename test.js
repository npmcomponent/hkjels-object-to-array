
var toArray = require('./index');

describe('object-to-array', function () {

  it ('should only work for indexed objects', function () {
    (function () {
      return toArray('foo bar');
    }).should.throw();
  });

  it ('should return an array', function (done) {
    var testfn = function () {
      var args = toArray(arguments);
      args.should.be.an.instanceof(Array);
      args.shift().should.equal('blah');
      done();
    }
    testfn('blah', 'di', 'dah', 4);
  });

});

