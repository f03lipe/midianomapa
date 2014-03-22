var jobber;

jobber = require('../jobber.js')(function(e) {
  var Event;
  console.log('Starting to fetch all events.');
  Event = require('../../src/models/event.js');
  return Event.reFetchAll(function(err, results) {
    console.log("Events refetched and maintaned: " + results.length);
    return Event.flushCache(function(err2) {
      return e.quit(err || err2);
    });
  });
}).start();