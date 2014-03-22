var jobber;

jobber = require('../jobber.js')(function(e) {
  console.log("About to drop all ninjas.");
  return e.checkContinue(function() {
    var Ninja;
    Ninja = require('../../src/models/ninja.js');
    return Ninja.remove({}, function(err, count) {
      console.log("Count affected: " + count + ".");
      return Ninja.flushCache(function(err2) {
        return e.quit(err || err2);
      });
    });
  });
}).start();