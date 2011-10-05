/**
* http client
*/
(function(TiQuery) {
	TiQuery.extend({
		httpSettings: {
			type:		'get',
			data:		'',
			dataType:	'',
			timeout:	3000, // milliseconds
			headers:	{},
			onError:	null,
			onLoad:		null,
			onDataStream: null,
			onReadyStateChange: null,
			onSendStream: null
		},
		
		http: function(origSettings) {
			var s = TiQuery.extend(true, {}, TiQuery.httpSettings, origSettings);
			
			if (s.url == null) {
				return false;
			}
		
			s.type = s.type.toUpperCase();
			s.dataType = s.dataType.toUpperCase();
			
			// create the connection
			var http = Titanium.Network.createHTTPClient();
			
			// set callbacks
			http.ondatastream = s.onDataStream;
			http.onsendstream = s.onSendStream;
			http.onreadystatechange = s.onReadyStateChange;
			
			// set timeout
			http.setTimeout(s.timeout);
			
			// on load
			http.onload = function(event) {
				Titanium.API.debug('http complete');
				
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
					s.onLoad(results, http, event);
				}
			}
			
			// on error
			http.onerror = function(event) {
				Titanium.API.error('http error: ' + event.error);
				
				if (TiQuery.isFunction(s.onError)) {
					s.onError(http, event);
				}
			}
			
			// open request
			http.open(s.type, s.url);
			
			// set headers
			if ($.isPlainObject(s.headers)) {
				for(var key in s.headers) {
					http.setRequestHeader(key, s.headers[key]);
				}
			}
			
			// send request
			http.send(s.data);
			
			// clear the object
			http = null;
			
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
			
			TiQuery[name] = function(url, data, fn, headers) {
				if (TiQuery.isFunction(data)) {
					headers = fn || {};
					fn = data;
					data = {};
				}
				
				this.http({
					type:		type,
					url:		url,
					data:		data,
					dataType:	dataType,
					headers:	headers,
					onLoad:		fn
				});
			}
		})(shortcuts[i]);
	}
})(TiQuery);
