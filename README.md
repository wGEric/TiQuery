# What is TiQuery?

TiQuery is a javascript library that makes tasks within [Appcelerator Titanium](http://www.appcelerator.com/) easier and quicker. It is based on [jQuery](http://jquery.com).

# Shortcuts

TiQuery provides shortcuts to Titanium methods. Here are some:

    // Utilities
    $.info('My message');
    $.error('my error message');
    $.include('path/to/file.js');
    $.currentWindow;
    
    // create* methods
    var window = $.Window({
        src: 'path/to/file.js'
    });

    var view = $.View({
        width: 100,
        height: 100,
        backgroundColor: 'red'
    });
    
    window.add(view);

# Events

TiQuery makes adding and triggering events easy.

    $(view).click(function(event) {
        // do something
    });
    
    $(view).click(); // triggers the click event

You can also register your own custom events.

    $.registerEvent('myEvent');
    
    $(window).myEvent(function() {
        // do something
    });

# HTTP Client

Getting data from HTTP is simple with TiQuery with its helper functions.

    $.get('http://www.google.com', function(data) {
        // do something with text data
    });

    $.post('http://www.example.com', {var1: 'value1', var2: 'value2'}, function(data) {
        // do something with text data
    });

    $.getJSON('http://www.example.com/file.json', function(data) {
        // do something with json object
    });
    
    $.getXML('http://www.example.com/file.xml', function(data) {
        // do something with xml dom object
    });

# Documentation

View the [wiki](https://github.com/naturalcodeproject/TiQuery/wiki) for more information.