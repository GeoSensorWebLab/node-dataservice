#!/usr/bin/env node
var fs = require('fs');
var request = require('request');

var post = function(URL, body) {
  request.post({
    uri: URL,
    body: body
  }, function (e, r, body) {
    var response = JSON.parse(body);
    console.log(JSON.stringify(response, null, '  '));
  });
};

module.exports = function(userUID, sensorUID, body) {
  fs.readFile('.data-service', 'utf8', function (err, data) {
    if (err) throw err;

    var options = JSON.parse(data);
    post([options.url, "users", userUID, "sensors", sensorUID,
      "datastreams"].join("/"), body);
  });
};
