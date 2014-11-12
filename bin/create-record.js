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

module.exports = function(datastreamUID, body) {
  fs.readFile('.data-service', 'utf8', function (err, data) {
    if (err) throw err;

    var options = JSON.parse(data);
    var URL = [options.url, "datastreams", datastreamUID, "records"].join("/");

    // If array, upload one at a time
    var uploadData = JSON.parse(body);
    if (Array.isArray(uploadData)) {
      uploadData.forEach(function (record) {
        post(URL, JSON.stringify(record));
      });
    } else {
      post(URL, body);
    }
  });
};
