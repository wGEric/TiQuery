/**
* events
*/
TiQuery.fn.extend({
	/**
	 * binds an event to an object
	 */
	bind: function(type, fn) {
		this[0].addEventListener(type, fn);
	
		return this;
	},
	
	/**
	 * removes an event
	 */
	unbind: function(type) {
		this[0].removeEventListener(type);
		
		return this;
	},
	
	/**
	 * triggers an event on an object
	 */
	trigger: function(type) {
		this[0].fireEvent(type);
		
		return this;
	},
	
	/**
	 * helper functions for common events. Other events must call bind or trigger directly.
	 */
	click: function(fn) {
		if (fn == null) {
			this.trigger('click');
		} else {	  
			this.bind('click', fn);
		}
		return this;
	},
	
	dblclick: function(fn) {
		if (fn == null) {
			this.trigger('dblclick');
		} else {	  
			this.bind('dblclick', fn);
		}
		return this;
	},
	
	doubletap: function(fn) {
		if (fn == null) {
			this.trigger('doubletap');
		} else {	  
			this.bind('doubletap', fn);
		}
		return this;
	},
	
	singletap: function(fn) {
		if (fn == null) {
			this.trigger('singletap');
		} else {	  
			this.bind('singletap', fn);
		}
		return this;
	},
	
	swipe: function(fn) {
		if (fn == null) {
			this.trigger('swipe');
		} else {	  
			this.bind('swipe', fn);
		}
		return this;
	},
	
	touchcancel: function(fn) {
		if (fn == null) {
			this.trigger('touchcancel');
		} else {	  
			this.bind('touchcancel', fn);
		}
		return this;
	},
	
	touchend: function(fn) {
		if (fn == null) {
			this.trigger('touchend');
		} else {	  
			this.bind('touchend', fn);
		}
		return this;
	},
	
	touchmove: function(fn) {
		if (fn == null) {
			this.trigger('touchmove');
		} else {	  
			this.bind('touchmove', fn);
		}
		return this;
	},
	
	touchstart: function(fn) {
		if (fn == null) {
			this.trigger('touchstart');
		} else {	  
			this.bind('touchstart', fn);
		}
		return this;
	},
	
	twofingertap: function(fn) {
		if (fn == null) {
			this.trigger('twofingertap');
		} else {	  
			this.bind('twofingertap', fn);
		}
		return this;
	},
	
	scroll: function(fn) {
		if (fn == null) {
			this.trigger('scroll');
		} else {	  
			this.bind('scroll', fn);
		}
		return this;
	},
	
	cancel: function(fn) {
		if (fn == null) {
			this.trigger('cancel');
		} else {	  
			this.bind('cancel', fn);
		}
		return this;
	},
	
	orientationchange: function(fn) {
		if (fn == null) {
			this.trigger('orientationchange');
		} else {	  
			this.bind('orientationchange', fn);
		}
		return this;
	},
	
	shake: function(fn) {
		if (fn == null) {
			this.trigger('shake');
		} else {	  
			this.bind('shake', fn);
		}
		return this;
	}
});
