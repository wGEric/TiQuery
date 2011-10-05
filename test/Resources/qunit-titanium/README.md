This is the very first stab at getting qunit to work in Titanium.

The qunit.js file has been patched so most tests run. However, one test is failing even though there does not seem to be a problem.

The great thing is that this supports asynch tests, though I haven't done too much yet with it.

Install
=======
Via git submodule:
    (from the top of your titanium app:)
    git submodule add git://github.com/mindreframer/qunit-titanium.git Resources/vendor/qunit-titanium
    cp vendor/qunit-titanium/runner.js runner.js
    mkdir -p test
    cp vendor/qunit-titanium/test/*.js test/


Modify tests_to_run.js to include your tests.

Add the app.js_snippet to your app.js (assuming you are using tabGroups, otherwise you will have to find another way).

For mocking, I've tested jsMockito support. Follow the instructions to install jsMockito (http://chrisleishman.github.com/jsmockito/) and uncomment the lines in titanium_adaptor.js (correcting the subdirectories, etc. on the way).

Disclaimer
==========
This is a work in progress. Please comment with any issues you are having.