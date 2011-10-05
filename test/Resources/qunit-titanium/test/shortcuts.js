module("Titanium Shortcuts");

if (Titanium.Platform.osname == 'android') {
	test("Android Functions", function() {
		expect(5);
		
		//equal($.BroadcastIntent().toString(), Titanium.Android.createBroadcastIntent().toString(), 'BroadcastIntent'); possible bug in Titanium
		equal($.Intent().toString(), Titanium.Android.createIntent().toString(), 'Intent');
		// equal($.IntentChooser().toString(), Titanium.Android.createIntentChooser().toString(), 'IntentChooser'); possible bug in Titanium
		equal($.Notification().toString(), Titanium.Android.createNotification().toString(), 'Notification');
		equal($.PendingIntent({intent: $.Intent()}).toString(), Titanium.Android.createPendingIntent({intent: $.Intent()}).toString(), 'PendingIntent');
		equal($.Service($.Intent()).toString(), Titanium.Android.createService($.Intent()).toString(), 'Service');
		equal($.ServiceIntent($.Intent()).toString(), Titanium.Android.createServiceIntent().toString($.Intent()), 'ServiceIntent');
	});
}

if (Titanium.Platform.osname != 'android') {
	test("Contact Functions", function() {
		expect(2);
	
		equal($.Group().toString(), Titanium.Contacts.createGroup().toString(), 'Group');
		equal($.Person().toString(), Titanium.Contacts.createPerson().toString(), 'Person');
	});
}

test("Facebook Functions", function() {
	expect(1);
	
	equal($.LoginButton().toString(), Titanium.Facebook.createLoginButton().toString(), 'LoginButton');
});

test("Filesystem Functions", function() {
	expect(2);
	
	if (Titanium.Platform.osname != 'android') {
		expect(3);
		equal($.File().toString(), Titanium.Filesystem.createFile().toString(), 'File');
	}
	
	equal($.TempDirectory().toString(), Titanium.Filesystem.createTempDirectory().toString(), 'TempDirectory');
	equal($.TempFile().toString(), Titanium.Filesystem.createTempFile().toString(), 'TempFile');
});

test("Map Functions", function() {
	expect(2);
	
	equal($.Annotation().toString(), Titanium.Map.createAnnotation().toString(), 'Annotation');
	equal($.MapView().toString(), Titanium.Map.createView().toString(), 'MapView');
});

if (Titanium.Platform.osname != 'android') {
	test("Media Functions", function() {
		expect(4);
		
		equal($.AudioPlayer().toString(), Titanium.Media.createAudioPlayer().toString(), 'AudioPlayer');
		equal($.AudioRecorder().toString(), Titanium.Media.createAudioRecorder().toString(), 'AudioRecorder');
		
		// commented out because of Titanium (doc?) bugs
		//equal($.Item().toString(), Titanium.Media.createItem().toString(), 'Item');
		//equal($.MusicPlayer().toString(), Titanium.Media.createMusicPlayer().toString(), 'MusicPlayer');
		equal($.Sound().toString(), Titanium.Media.createSound().toString(), 'Sound');
		equal($.VideoPlayer().toString(), Titanium.Media.createVideoPlayer().toString(), 'VideoPlayer');
	});
}

test("Network Functions", function() {
	expect(1);
	
	if (Titanium.Platform.osname != 'android') {
		expect(4);
		equal($.BonjourBrowser().toString(), Titanium.Network.createBonjourBrowser().toString(), 'BonjourBrowser');
		equal($.BonjourService().toString(), Titanium.Network.createBonjourService().toString(), 'BonjourService');
		equal($.TCPSocket().toString(), Titanium.Network.createTCPSocket().toString(), 'TCPSocket');
	}
	
	equal($.HTTPClient().toString(), Titanium.Network.createHTTPClient().toString(), 'HTTPClient');
});

test("Platform Functions", function() {
	expect(1);
	ok($.UUID().toString().match(/[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}/i), 'UUID isn\'t valid');
});

test("Stream Functions", function() {
	expect(0);
	
	//equal(Titanium.Stream.createStream().toString(), $.Stream().toString());
});

test("UI Functions", function() {
	expect(31);
	
	equal($['2DMatrix']().toString(), Titanium.UI.create2DMatrix().toString(), '2DMatrix');
	equal($['3DMatrix']().toString(), Titanium.UI.create3DMatrix().toString(), '3DMatrix');
	equal($.ActivityIndicator().toString(), Titanium.UI.createActivityIndicator().toString(), 'ActivityIndicator');
	equal($.AlertDialog().toString(), Titanium.UI.createAlertDialog().toString(), 'AlertDialog');
	equal($.Animation().toString(), Titanium.UI.createAnimation().toString(), 'Animation');
	equal($.Button().toString(), Titanium.UI.createButton().toString(), 'Button');
	equal($.ButtonBar().toString(), Titanium.UI.createButtonBar().toString(), 'ButtonBar');
	equal($.EmailDialog().toString(), Titanium.UI.createEmailDialog().toString(), 'EmailDialog');
	equal($.ImageView().toString(), Titanium.UI.createImageView().toString(), 'ImageView');
	equal($.Label().toString(), Titanium.UI.createLabel().toString(), 'Label');
	equal($.OptionDialog().toString(), Titanium.UI.createOptionDialog().toString(), 'OptionDialog');
	equal($.Picker().toString(), Titanium.UI.createPicker().toString(), 'Picker');
	equal($.PickerColumn().toString(), Titanium.UI.createPickerColumn().toString(), 'PickerColumn');
	equal($.PickerRow().toString(), Titanium.UI.createPickerRow().toString(), 'PickerRow');
	equal($.ProgressBar().toString(), Titanium.UI.createProgressBar().toString(), 'ProgressBar');
	equal($.ScrollView().toString(), Titanium.UI.createScrollView().toString(), 'ScrollView');
	equal($.ScrollableView().toString(), Titanium.UI.createScrollableView().toString(), 'ScrollableView');
	equal($.SearchBar().toString(), Titanium.UI.createSearchBar().toString(), 'SearchBar');
	equal($.Slider().toString(), Titanium.UI.createSlider().toString(), 'Slider');
	equal($.Switch().toString(), Titanium.UI.createSwitch().toString(), 'Switch');
	equal($.Tab().toString(), Titanium.UI.createTab().toString(), 'Tab');
	equal($.TabGroup().toString(), Titanium.UI.createTabGroup().toString(), 'TabGroup');
	equal($.TableView().toString(), Titanium.UI.createTableView().toString(), 'TableView');
	equal($.TableViewRow().toString(), Titanium.UI.createTableViewRow().toString(), 'TableViewRow');
	equal($.TableViewSection().toString(), Titanium.UI.createTableViewSection().toString(), 'TableViewSection');
	equal($.TextArea().toString(), Titanium.UI.createTextArea().toString(), 'TextArea');
	equal($.TextField().toString(), Titanium.UI.createTextField().toString(), 'TextField');
	equal($.Toolbar().toString(), Titanium.UI.createToolbar().toString(), 'Toolbar');
	equal($.View().toString(), Titanium.UI.createView().toString(), 'View');
	equal($.WebView().toString(), Titanium.UI.createWebView().toString(), 'WebView');
	equal($.Window().toString(), Titanium.UI.createWindow().toString(), 'Window');
	
	if (Titanium.Platform.osname != 'android') {
		expect(35);
		equal($.CoverFlowView().toString(), Titanium.UI.createCoverFlowView().toString(), 'CoverFowView');
		equal($.DashboardItem().toString(), Titanium.UI.createDashboardItem().toString(), 'DashboardItem');
		equal($.DashboardView().toString(), Titanium.UI.createDashboardView().toString(), 'DashboardView');
		equal($.TabbedBar().toString(), Titanium.UI.createTabbedBar().toString(), 'TabbedBar');
	}
});
