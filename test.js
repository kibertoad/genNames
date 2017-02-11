var genNames = require('./index.js');

var options = {
  count: 10,
  gender: 'male',
  surname: true
};

genNames(options,function(names) {
  console.log("\nMales\n");
  console.log(names);
});


var options = {
  count: 10,
  gender: 'females',
  surname: true
};

genNames(options,function(names) {
  console.log('\nFemales\n');
  console.log(names);
});

var options = {
  count: 10,
  gender: false,
  surname: false
};

genNames(options,function(names) {
  console.log('\nRandom Gender with no Last Names\n');
  console.log(names);
});

