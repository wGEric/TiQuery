module("HTTP");

test("HTTP Exists", function() {
	expect(14);
	
	var shortcuts = ['http', 'get', 'getJSON', 'getXML', 'post', 'postJSON', 'postXML'];
	
	for(var i = 0, total = shortcuts.length; i < total; i++) {
		ok($[shortcuts[i]] != undefined, shortcuts[i] + " defined");
		ok($.isFunction($[shortcuts[i]]), shortcuts[i] + " function");
	}
});

test("URL Required", function() {
	ok($.http() === false);
});

test("Callbacks", function() {
	expect((Titanium.Platform.osname == 'android') ? 3 : 4);
	
	stop();
	
	var dataStream = false;
	
	$.http({
		url: 				'http://www.google.com',
		data:				'test=test',
		onLoad: function() {
			ok(true, "onLoad");
			start();
		},
		onDataStream: function() {
			// this fires multiple times. We only want it once.
			if (dataStream == false) {
				ok(true, "onDataStream")
				dataStream = true;
			}
		},
		onReadyStateChange: function(event) {
			if (event.source.readyState == 1) { 
				ok(true, "onReadyStateChange");
			}
		},
		onSendStream: function() {
			ok(true, "onSendStream");
		}
	});
});

test("Error Callback", function() {
	expect(1);
	
	stop();
	
	$.http({
		url: 'http://thisisabogusurladlfjfo.com',
		onError: function() {
			ok(true, "onError");
			
			start();
		}
	});
});

/*test("POST", function() {
	expect(1);
	
	stop();
	
	$.post("http://www.google.com", {foo: "bar"}, function(data) {
		$.info(data);
		
		ok(data, "post returns data");
		
		start();
	});
});*/

test("GET txt file", function() {
	expect(1);
	
	stop();
	
	$.get("http://www.tiquery.com/tests/tests.txt", function(data) {
		equals(data, "test text file");
		start();
	});
});

test("GET xml file", function() {
	expect(3);
	
	stop();
	
	$.getXML("http://www.tiquery.com/tests/tests.xml", function(data) {
		var items = data.getElementsByTagName("item");
		
		equals(items.length, 2, "number of <item>s");
		equals(items.item(0).text, "one", "first <item> text");
		equals(items.item(1).text, "two", "second <item> text");

		start();
	});
});

test("GET json file", function() {
	expect(3);
	
	stop();
	
	$.getJSON("http://www.tiquery.com/tests/tests.json", function(data) {
		equals(data.length, 2, "number of items in array");
		equals(data[0].foo, "bar", "value of foo");
		equals(data[1].green, "yellow", "value of green");
		
		start();
	});
});
