#!/usr/bin/env node
var fs = require('fs');
var request = require('request');

var put = function(URL, body) {
  request.put({
    uri: URL,
    body: body
  }, function (e, r, body) {
    var response = JSON.parse(body);
    console.log(JSON.stringify(response, null, '  '));
  });
};

module.exports = function(userUID, body) {
  fs.readFile('.data-service', 'utf8', function (err, data) {
    if (err) throw err;

    var options = JSON.parse(data);
    put(options.url + "/users/" + userUID, body);
  });
};
