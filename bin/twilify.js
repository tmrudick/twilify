#!/usr/bin/env node

var program = require('commander');

program
    .version('0.0.1')
    .option('-t, --to', 'Recipient Phone Number')
    .option('-f, --from', 'Sending Phone Number')
    .option('-b, --body', 'Message Body')
    .option('--sid', 'Twilio Account SID')
    .option('--token', 'Twilio Auth Token')
    .parse(process.argv);

program.from = program.from || process.env['TWILIO_PHONE_NUMBER'];

if (!program.to || !program.from || !program.body) {
    return console.error('Sender, recipient, and message body are required.');
}

program.sid = program.sid || process.env['TWILIO_ACCOUNT_SID'];
program.token = program.token || process.env['TWILIO_AUTH_TOKEN'];

if (!program.sid || !program.token) {
    return console.error('Twilio Account SID or Auth Token is Missing!');
}

var client = require('twilio')(program.sid, program.token);

client.sendSms({
    to: program.to,
    from: program.from,
    body: program.body
}, function(err, responseData) {
    if (err) {
        throw err;
    }
});