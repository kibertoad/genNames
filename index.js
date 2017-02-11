var surnames = require('./surnames.json');
var females = require('./females.json');
var males = require('./males.json');

function genNames(options,callback) {
  "use strict";
  var o = {};
  if (!options) {
    var options = {};
  }
  o.gender = false;
  var gpool = [];
  if (options.gender) {
    if (options.gender.toLowerCase() == 'female') {
      gpool = females.names;
    } else if (options.gender.toLowerCase() == 'male') {
      gpool = males.names;
    } else {
      gpool = females.names.concat(males.names);
    }
  } else {
    gpool = females.names.concat(males.names);
  }
  o.count = 1;
  if (options.count && !isNaN(options.count) && options.count > 0) {
    o.count = options.count;
  }
  o.surname = false;
  if (options.surname) {
    o.surname = true;
    var lpool = surnames.names;
  }
  var names = [];
  var x = 0;
  while (x < o.count) {
    var rand = Math.floor((Math.random() * (gpool.length)));
    var name = {};
    name.first = gpool[rand].toLowerCase();
    name.first = name.first.split('');
    name.first[0] = name.first[0].toUpperCase();
    name.first = name.first.join('');
    if (o.surname) {
      var randl = Math.floor((Math.random() * (lpool.length)));
      name.last = lpool[randl].toLowerCase();
      name.last = name.last.split('');
      name.last[0] = name.last[0].toUpperCase();
      name.last = name.last.join('');
    }
    names.push(name);
    x++;
  }
  callback(names);
}

module.exports = genNames;
