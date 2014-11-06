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

module.exports = function(datastreamUID, recordUID) {
  fs.readFile('.data-service', 'utf8', function (err, data) {
    if (err) throw err;

    var options = JSON.parse(data);
    get([options.url, "datastreams", datastreamUID, "records",
      recordUID].join('/'));
  });
}
