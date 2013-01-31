
/**
 * Arguments-object to array.
 */

var objectToArray = function (args) {
  if (typeof args !== 'object') {
    throw new Error('Invalid arguments-object passed.');
  }
  return Array.prototype.slice.call(args);
};

// Expose `argsToArray`

module.exports = objectToArray;

