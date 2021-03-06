#!/usr/bin/env node
var fs = require('fs');
var request = require('request');

var get = function(URL) {
  request.get({
    uri: URL,
    qs: {
      detail: true
    }
  }, function (e, r, body) {
    var response = JSON.parse(body);
    console.log(JSON.stringify(response, null, '  '));
  });
};

module.exports = function(userUID, sensorUID, datastreamUID) {
  fs.readFile('.data-service', 'utf8', function (err, data) {
    if (err) throw err;

    var options = JSON.parse(data);
    get([ options.url, "users", userUID, "sensors", sensorUID, "datastreams",
      datastreamUID].join('/'));
  });
}
