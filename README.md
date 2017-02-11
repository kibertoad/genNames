# genNames
Generate random names



## Example:

Generate 10 random male names with surnames.

    var genNames = require('/path/to/gennames');
    var options = {
      count: 10,
      gender: 'male',
       surname: true
    };

    genNames(options,function(names) {
     console.log("\nMales\n");
     console.log(names);
    });
