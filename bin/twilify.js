#!/usr/bin/env node

var client = require('twilio')('sid', 'token'),
    argv = require('optimist').argv;

client.sendSms({
    to:argv.to,
    from: argv.from,
    body: argv.msg
}, function(err, responseData) {
    if (err) {
        throw err;
    }
});