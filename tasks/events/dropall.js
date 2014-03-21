var jobber;

jobber = require('../jobber.js')(function(e) {
  console.log("About to drop all events.");
  return e.checkContinue(function() {
    var Event;
    Event = require('../../src/models/event.js');
    return Event.remove({}, function(err, count) {
      console.log("Count affected: " + count + ".");
      return Event.flushCache(function(err2) {
        return e.quit(err || err2);
      });
    });
  });
}).start();
