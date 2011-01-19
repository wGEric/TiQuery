/**
* Titanium shortcuts
*/
(function(TiQuery) {
	TiQuery.fn.extend({
		// shortcuts for Titanium.API.info, Titanium.API.error, etc
		info:		Titanium.API.info,
		error:		Titanium.API.error,
		warn:		Titanium.API.warn,
		log:		Titanium.API.log,
		include:	Titanium.include,
		db:			Titanium.Database.open
	});
	
	/**
	 * creates shortcuts to for create* methods within Titanium
	 *
	 * Idea/some code taken from Redux by Dawson Toth (https://github.com/dawsontoth/Appcelerator-Titanium-Redux)
	 */
	var classes = {
		Contacts:	['Group', 'Person'],
		Facebook:	['LoginButton'],
		Filesystem:	['File', 'TempDirectory', 'TempFile'],
		Media:		['AudioPlayer', 'AudioRecorder', 'Item', 'MusicPlayer', 'Sound', 'VideoPlayer'],
		Network:	['BonjourBrowser', 'BonjourService', 'HTTPClient', 'TCPSocket'],
		Platform:	['UUID'],
		UI:			['2DMatrix', '3DMatrix', 'ActivityIndicator', 'AlertDialog', 'Animation', 'Button', 'ButtonBar', 'CoverFlowView', 'DashboardItem', 'DashboardView', 'EmailDialog', 'ImageView', 'Label', 'OptionDialog', 'Picker', 'PickerColumn', 'PickerRow', 'ProgressBar', 'ScrollView', 'ScrollableView', 'SearchBar', 'Slider', 'Switch', 'Tab', 'TabGroup', 'TabbedBar', 'TableView', 'TableViewRow', 'TableViewSection', 'TextArea', 'TextField', 'Toolbar', 'View', 'WebView', 'Window']
	}
	
	for(var namespace in classes) {
		for(var i = 0, total = classes[namespace].length; i < total; i++) {
			(function(name) {				
				TiQuery[name] = function(args) {
					return Titanium[namespace]['create' + name](args);
				};
			})(classes[namespace][i]);
		}
	}
})(TiQuery);