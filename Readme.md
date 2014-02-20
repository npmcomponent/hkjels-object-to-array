*This repository is a mirror of the [component](http://component.io) module [hkjels/object-to-array](http://github.com/hkjels/object-to-array). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/hkjels-object-to-array`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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

   toArray(arguments) // Returns an array from the object passed.

## License

  MIT

