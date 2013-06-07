twilify
=======

Send a text message from the command line with Twilio and Node.js

Install
-------

    sudo npm install -g twilify

Usage
-----

    twilify --to +15556428832 --from +1555205499 --body "Hello, From The Internet" --sid 1234 --token 5678

Configuration
-------------

Instead of having to specify the from number, account SID, and account token every single time, you can simply create environment variables for them.

    export TWILIO_PHONE_NUMBER=+1555205499
    export TWILIO_ACCOUNT_SID=1234
    export TWILIO_AUTH_TOKEN=5678

Once the environment variables are set, you only need to specify the recipient phone number and message body.

Monitoring Long Running Processes
---------------------------------

The man reason for twilify is to notify you when a long running process completes either on a local or remote machine.

    ./my-long-running-command && twilify -t +15556428832 -b "Your Long Running Process Has Exited"

It is probably a good idea to run the above command in a `screen` or `tmux` session.