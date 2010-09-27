/**
* XHR
*/
TiQuery.fn.extend({
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
		var s = TiQuery.extend(true, {}, TiQuery.fn.xhrSettings, origSettings);
		
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
			Titanium.API.info('XHR completed');
			
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
				results = TiQuery.fn.parseJSON(this.responseText);
			} else {
				// no data type specified so don't do anything with it
				results = this.responseText;
			}
			
			if (TiQuery.fn.isFunction(s.onLoad)) {
				s.onLoad(results, xhr, event);
			}
		}
		
		// on error
		xhr.onerror = function(event) {
			Titanium.API.error('XHR error: ' + event.error);
			
			if (TiQuery.fn.isFunction(s.onError)) {
				s.onError(xhr, event);
			}
		}
		
		// open and send the data
		xhr.open(s.type, s.url);
		xhr.send(s.data);
		
		// clear the object
		xhr = null;
	},
	
	/**
	 * shorthand for GET requests
	 */
	get: function(url, data, fn) {
		if (TiQuery.fn.isFunction(data)) {
			fn = data;
			data = {};
		}
		
		this.xhr({
			type:	'get',
			url:	url,
			data:	data,
			onLoad:	fn
		});
	},
	
	getJSON: function(url, data, fn) {
		if (TiQuery.fn.isFunction(data)) {
			fn = data;
			data = {};
		}
		
		this.xhr({
			type:	'get',
			dataType: 'JSON',
			url:	url,
			data:	data,
			onLoad:	fn
		});
	},
	
	getXML: function(url, data, fn) {
		if (TiQuery.fn.isFunction(data)) {
			fn = data;
			data = {};
		}
		
		this.xhr({
			type:	'get',
			dataType: 'XML',
			url:	url,
			data:	data,
			onLoad:	fn
		});
	},
	
	/**
	 * shorthand for POST
	 */
	post: function(url, data, fn) {
		if (TiQuery.fn.isFunction(data)) {
			fn = data;
			data = {};
		}
		
		this.xhr({
			type:	'post',
			url:	url,
			data:	data,
			onLoad:	fn
		});
	},
	
	postJSON: function(url, data, fn) {
		if (TiQuery.fn.isFunction(data)) {
			fn = data;
			data = {};
		}
		
		this.xhr({
			type:	'post',
			dataType: 'JSON',
			url:	url,
			data:	data,
			onLoad:	fn
		});
	},
	
	postXML: function(url, data, fn) {
		if (TiQuery.fn.isFunction(data)) {
			fn = data;
			data = {};
		}
		
		this.xhr({
			type:	'post',
			dataType: 'XML',
			url:	url,
			data:	data,
			onLoad:	fn
		});
	}
});
