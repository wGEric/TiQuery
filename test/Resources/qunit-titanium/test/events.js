module("Events");

test("Event Shortcuts Exists", function() {
	expect(32);
	
	var events = ['blur', 'cancel', 'click', 'dblclick', 'doubletap', 'focus', 'orientationchange', 'scroll', 'shake', 'singletap', 'swipe', 'touchcancel', 'touchend', 'touchmove', 'touchstart', 'twofingertap'];
		
	for(var i = 0, total = events.length; i < total; i++) {
		ok($.fn[events[i]] != undefined, events[i] + " defined");
		ok($.isFunction($.fn[events[i]]), events[i] + " function");
	}
});

test("Custom Events", function() {
	expect(2);
	
	$.registerEvent('customEvent');
	
	ok($.fn.customEvent != undefined, "customEvent defined");
	ok($.isFunction($.fn.customEvent), "customEvent function");
});

// only testing click since if it works the other ones will since they are all setup the same
test("Click", function() {
	expect(1);
	
	stop();
	
	var clickEvent = function() {
		ok(true);
		start();
		
		$(label).unbind('click', clickEvent);
	};
	
	$(label).click(clickEvent);
	
	$(label).click();
});
