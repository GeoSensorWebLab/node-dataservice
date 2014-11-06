#!/usr/bin/env node
var fs = require('fs');
var request = require('request');

var destroy = function(URL) {

  request.del({
    uri: URL
  }, function (e, r, body) {
    var response = JSON.parse(body);
    console.log(JSON.stringify(response, null, '  '));
  });
};

module.exports = function(userUID, sensorUID) {
  fs.readFile('.data-service', 'utf8', function (err, data) {
    if (err) throw err;

    var options = JSON.parse(data);
    destroy(options.url + "/users/" + userUID + "/sensors/" + sensorUID);
  });
};
