
/**
 * Array-like object to array.
 */

var objectToArray = function (args) {
  if (typeof args !== 'object') {
    throw new Error('objectToArray only takes `array-like` objects');
  }
  return [].slice.call(args);
};

// Expose `argsToArray`

module.exports = objectToArray;
