/**
* Titanium shortcuts
*/
(function(TiQuery) {
	TiQuery.extend({
		// shortcuts for Titanium.API.info, Titanium.API.error, etc
		info:		Titanium.API.info,
		error:		Titanium.API.error,
		warn:		Titanium.API.warn,
		log:		Titanium.API.log,
		include:	Titanium.include,
		db:			Titanium.Database.open,
		currentWindow: Titanium.UI.currentWindow,
		
		// registers shortcuts
		registerShortcut: function(_namespace, _name, _shortcut, prefix) {
			if (_shortcut === undefined) {
				_shortcut = _name;
			}
			
			if (prefix === undefined) {
				prefix = 'create';
			}
			
			TiQuery[_shortcut] = function(args) {
				if (args === undefined) {
					args = {};
				}
				return Titanium[_namespace][prefix + _name](args);
			};
		}
	});
	
	/**
	 * creates shortcuts to for create* methods within Titanium
	 *
	 * Idea/some code taken from Redux by Dawson Toth (https://github.com/dawsontoth/Appcelerator-Titanium-Redux)
	 */
	var classes = {
		Android:	['BroadcastIntent', 'Intent', 'IntentChooser', 'Notification', 'PendingIntent', 'Service', 'ServiceIntent'],
		Contacts:	['Group', 'Person'],
		Facebook:	['LoginButton'],
		Filesystem:	['File', 'TempDirectory', 'TempFile'],
		Map:		['Annotation'],
		Media:		['AudioPlayer', 'AudioRecorder', 'Item', 'MusicPlayer', 'Sound', 'VideoPlayer'],
		Network:	['BonjourBrowser', 'BonjourService', 'HTTPClient', 'TCPSocket'],
		Platform:	['UUID'],
		Stream:		['Stream'],
		UI:			['2DMatrix', '3DMatrix', 'ActivityIndicator', 'AlertDialog', 'Animation', 'Button', 'ButtonBar', 'CoverFlowView', 'DashboardItem', 'DashboardView', 'EmailDialog', 'ImageView', 'Label', 'OptionDialog', 'Picker', 'PickerColumn', 'PickerRow', 'ProgressBar', 'ScrollView', 'ScrollableView', 'SearchBar', 'Slider', 'Switch', 'Tab', 'TabGroup', 'TabbedBar', 'TableView', 'TableViewRow', 'TableViewSection', 'TextArea', 'TextField', 'Toolbar', 'View', 'WebView', 'Window']
	}
	
	for(var namespace in classes) {
		for(var i = 0, total = classes[namespace].length; i < total; i++) {
			TiQuery.registerShortcut(namespace, classes[namespace][i])
		}
	}
	
	// A couple of methods don't follow the same pattern above so here they are
	TiQuery.registerShortcut('Map', 'View', 'MapView');
})(TiQuery);