/**
* events
*/
(function(TiQuery) {
	TiQuery.extend({
		/**
		 * registers an event shortcut
		 */
		registerEvent: function(event) {		
			TiQuery.fn[event] = function(fn) {
				if (fn == null) {
					return this.trigger(event);
				} else {	  
					return this.bind(event, fn);
				}
			}
		}
	});

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
		unbind: function(type, fn) {
			this[0].removeEventListener(type, fn);
			
			return this;
		},
		
		/**
		 * triggers an event on an object
		 */
		trigger: function(type) {
			this[0].fireEvent(type);
			
			return this;
		}
	});
	
	var events = ['blur', 'cancel', 'click', 'dblclick', 'doubletap', 'focus', 'orientationchange', 'scroll', 'shake', 'singletap', 'swipe', 'touchcancel', 'touchend', 'touchmove', 'touchstart', 'twofingertap'];
	
	for(var i = 0, total = events.length; i < total; i++) {
		TiQuery.registerEvent(events[i]);
	}
	
})(TiQuery);