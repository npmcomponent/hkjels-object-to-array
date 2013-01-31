
# object-to-array

  Return an array from an array-like object.

## Installation

    $ component install hkjels/object-to-array

## Usage

    var toArray = require('object-to-array');

    function outputArgs() {
      var args = toArray(arguments);
      console.log(args);
    }

    outputArgs('blah', 'di', 'dah', 4); // Outputs ["blah", "di", "dah", 4]

## API

   toArray(arguments) // Returns an array from the arguments-object passed.

## License

  MIT

