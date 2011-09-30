/**
 *  Unit Tests
 */
Titanium.include('tiquery.js');
Titanium.include('jsunity-0.6.js');

var win = Titanium.UI.createWindow();

var label = Titanium.UI.createLabel({
	color:'#999',
	text:'Running Tests...',
	font: {
		fontSize:20,
		fontFamily:'Helvetica Neue'
	},
	textAlign:'center',
	width:'auto',
	height: 'auto',
});

win.add(label);
win.open();

// override jsunity's log function to output to the console
jsUnity.log = function(message) {
    Titanium.API.info(message);
};

// override jsunity's error function
jsUnity.error = function(messages) {
	Titanium.API.error(message);
}

/**
 * tests for shortcuts
 */
var shortcutTests = {
	suiteName: 'Titanium Shortcuts',
	
	testMisc: function() {
		jsUnity.assertions.assertEqual(Titanium.API.info,	$.info);
		jsUnity.assertions.assertEqual(Titanium.API.error,	$.error);
		jsUnity.assertions.assertEqual(Titanium.API.warn,	$.warn);
		jsUnity.assertions.assertEqual(Titanium.API.log,	$.log);
		jsUnity.assertions.assertEqual(Titanium.include,	$.include);
		jsUnity.assertions.assertEqual(Titanium.Database.open, $.db);
		jsUnity.assertions.assertEqual(Titanium.UI.currentWindow, $.currentWindow);
	},
	
	testAndroid: function() {
		if (Titanium.Platform.osname == 'android') {
			jsUnity.assertions.assertEqual(Titanium.Android.createBroadcastIntent().toString(),	$.BroadcastIntent().toString());
			jsUnity.assertions.assertEqual(Titanium.Android.createIntent().toString(),			$.Intent().toString());
			jsUnity.assertions.assertEqual(Titanium.Android.createIntentChooser().toString(),	$.IntentChooser().toString());
			jsUnity.assertions.assertEqual(Titanium.Android.createNotification().toString(),	$.Notification().toString());
			jsUnity.assertions.assertEqual(Titanium.Android.createPendingIntent().toString(),	$.PendingIntent().toString());
			jsUnity.assertions.assertEqual(Titanium.Android.createService().toString(),			$.Service().toString());
			jsUnity.assertions.assertEqual(Titanium.Android.createServiceIntent().toString(),	$.ServiceIntent().toString());
		}
	},
	
	testContacts: function() {
		jsUnity.assertions.assertEqual(Titanium.Contacts.createGroup().toString(),	$.Group().toString());
		jsUnity.assertions.assertEqual(Titanium.Contacts.createPerson().toString(),	$.Person().toString());
	},
	
	testFacebook: function() {
		jsUnity.assertions.assertEqual(Titanium.Facebook.createLoginButton().toString(), $.LoginButton().toString());
	},
	
	testFilesystem: function() {
		jsUnity.assertions.assertEqual(Titanium.Filesystem.createFile().toString(),			$.File().toString());
		jsUnity.assertions.assertEqual(Titanium.Filesystem.createTempDirectory().toString(), $.TempDirectory().toString());
		jsUnity.assertions.assertEqual(Titanium.Filesystem.createTempFile().toString(),		$.TempFile().toString());
	},
	
	testMap: function() {
		jsUnity.assertions.assertEqual(Titanium.Map.createAnnotation().toString(),	$.Annotation().toString());
		jsUnity.assertions.assertEqual(Titanium.Map.createView().toString(),		$.MapView().toString());
	},
	
	testMedia: function() {
		jsUnity.assertions.assertEqual(Titanium.Media.createAudioPlayer().toString(),	$.AudioPlayer().toString());
		jsUnity.assertions.assertEqual(Titanium.Media.createAudioRecorder().toString(),	$.AudioRecorder().toString());
		// commented out because of Titanium bugs
		//jsUnity.assertions.assertEqual(Titanium.Media.createItem().toString(),			$.Item().toString());
		//jsUnity.assertions.assertEqual(Titanium.Media.createMusicPlayer().toString(),	$.MusicPlayer().toString());
		jsUnity.assertions.assertEqual(Titanium.Media.createSound().toString(),			$.Sound().toString());
		jsUnity.assertions.assertEqual(Titanium.Media.createVideoPlayer().toString(),	$.VideoPlayer().toString());
	},
	
	testNetwork: function() {
		jsUnity.assertions.assertEqual(Titanium.Network.createBonjourBrowser().toString(),	$.BonjourBrowser().toString());
		jsUnity.assertions.assertEqual(Titanium.Network.createBonjourService().toString(),	$.BonjourService().toString());
		jsUnity.assertions.assertEqual(Titanium.Network.createHTTPClient().toString(),		$.HTTPClient().toString());
		jsUnity.assertions.assertEqual(Titanium.Network.createTCPSocket().toString(),		$.TCPSocket().toString());
	},
	
	testPlatform: function() {
		jsUnity.assertions.assertTrue($.UUID().toString().match(/[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}/));
	},
	
	testStream: function() {
		//jsUnity.assertions.assertEqual(Titanium.Stream.createStream().toString(), $.Stream().toString());
	},
	
	testUI: function() {
		jsUnity.assertions.assertEqual(Titanium.UI.create2DMatrix().toString(),		$['2DMatrix']().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.create3DMatrix().toString(),		$['3DMatrix']().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createActivityIndicator().toString(), $.ActivityIndicator().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createAlertDialog().toString(),	$.AlertDialog().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createAnimation().toString(),	$.Animation().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createButton().toString(),		$.Button().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createButtonBar().toString(),	$.ButtonBar().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createCoverFlowView().toString(), $.CoverFlowView().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createDashboardItem().toString(), $.DashboardItem().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createDashboardView().toString(), $.DashboardView().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createEmailDialog().toString(),	$.EmailDialog().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createImageView().toString(),	$.ImageView().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createLabel().toString(),		$.Label().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createOptionDialog().toString(), $.OptionDialog().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createPicker().toString(),		$.Picker().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createPickerColumn().toString(),	$.PickerColumn().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createPickerRow().toString(),	$.PickerRow().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createProgressBar().toString(),	$.ProgressBar().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createScrollView().toString(),	$.ScrollView().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createScrollableView().toString(), $.ScrollableView().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createSearchBar().toString(),	$.SearchBar().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createSlider().toString(),		$.Slider().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createSwitch().toString(),		$.Switch().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createTab().toString(),			$.Tab().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createTabGroup().toString(),		$.TabGroup().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createTabbedBar().toString(),	$.TabbedBar().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createTableView().toString(),	$.TableView().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createTableViewRow().toString(),	$.TableViewRow().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createTableViewSection().toString(), $.TableViewSection().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createTextArea().toString(),		$.TextArea().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createTextField().toString(),	$.TextField().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createToolbar().toString(),		$.Toolbar().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createView().toString(),			$.View().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createWebView().toString(),		$.WebView().toString());
		jsUnity.assertions.assertEqual(Titanium.UI.createWindow().toString(),		$.Window().toString());
	}
};

// event tests. Not sure of the best way to test these so I'll check to make sure they exist
var eventTests = {
	suiteName: 'Events',
	
	testExists: function() {
		var events = ['blur', 'cancel', 'click', 'dblclick', 'doubletap', 'focus', 'orientationchange', 'scroll', 'shake', 'singletap', 'swipe', 'touchcancel', 'touchend', 'touchmove', 'touchstart', 'twofingertap'];
		
		for(var i = 0, total = events.length; i < total; i++) {
			jsUnity.assertions.assertNotUndefined($.fn[events[i]]);
			jsUnity.assertions.assertTrue($.isFunction($.fn[events[i]]));
		}
	}
};

// test xhr requests
var xhrTests = {
	suiteName: 'XHR/AJAX',
	
	testExists: function() {
		var shortcuts = ['get', 'getJSON', 'getXML', 'post', 'postJSON', 'postXML'];
	
		for(var i = 0, total = shortcuts.length; i < total; i++) {
			jsUnity.assertions.assertNotUndefined($[shortcuts[i]]);
			jsUnity.assertions.assertTrue($.isFunction($[shortcuts[i]]));
		}
	}
};

// run the tests
var results = jsUnity.run(shortcutTests, eventTests, xhrTests);

if (results === false) {
	label.text = 'Invalid tests';
} else {
	label.text = "Tests completed\n" + 
	'Total: ' + results.total + "\n" +
	'Passed: ' + results.passed + "\n" +
	'Failed: ' + results.failed + "\n" +
	'Time: ' + results.duration + ' ms';
}
