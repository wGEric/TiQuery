/**
* XHR
*/
(function(TiQuery) {
	TiQuery.extend({
		xhrSettings: {
			type:		'get',
			dataType:	'',
			onError:	null,
			onLoad:		null,
			onDataStream: null,
			onReadyStateChange: null,
			onSendStream: null
		},
		
		xhr: function(origSettings) {
			var s = TiQuery.extend(true, {}, TiQuery.xhrSettings, origSettings);
			
			if (s.url == null) {
				return false;
			}
		
			s.type = s.type.toUpperCase();
			s.dataType = s.dataType.toUpperCase();
			
			// create the connection
			var xhr = Titanium.Network.createHTTPClient();
			
			// set callbacks
			xhr.ondatastream = s.onDataStream;
			xhr.onsendstream = s.onSendStream;
			xhr.onreadystatechange = s.onReadyStateChange;
			
			// on load
			xhr.onload = function(event) {
				Titanium.API.debug('XHR complete');
				
				var results = false;
				
				if (s.dataType == 'XML') {
					// data is XML so parse it
					try {
						results = this.responseXML;
					}
					catch(E) {
						// not valid XML
						Titanium.API.error(E);
						results = false;
					}
				} else if (s.dataType == 'JSON') {
					// data is JSON so parse it
					results = TiQuery.parseJSON(this.responseText);
				} else {
					// no data type specified so don't do anything with it
					results = this.responseText;
				}
				
				if (TiQuery.isFunction(s.onLoad)) {
					s.onLoad(results, xhr, event);
				}
			}
			
			// on error
			xhr.onerror = function(event) {
				Titanium.API.error('XHR error: ' + event.error);
				
				if (TiQuery.isFunction(s.onError)) {
					s.onError(xhr, event);
				}
			}
			
			// open and send the data
			xhr.open(s.type, s.url);
			xhr.send(s.data);
			
			// clear the object
			xhr = null;
			
			return true;
		}
	});
	
	var shortcuts = ['get', 'getJSON', 'getXML', 'post', 'postJSON', 'postXML'];
	
	for(var i = 0, total = shortcuts.length; i < total; i++) {
		(function(name) {
			var type = (name.indexOf('get') != -1) ? 'get' : 'post',
				dataType;
				
			if (name.indexOf('JSON') != -1) {
				dataType = 'JSON';
			} else if (name.indexOf('XML') != -1) {
				dataType = 'XML';
			}
			
			TiQuery[name] = function(url, data, fn) {
				if (TiQuery.isFunction(data)) {
					fn = data;
					data = {};
				}
				
				this.xhr({
					type:	type,
					url:	url,
					data:	dataType,
					onLoad:	fn
				});
			}
		})(shortcuts[i]);
	}
})(TiQuery);
