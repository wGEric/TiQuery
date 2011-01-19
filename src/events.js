/**
* events
*/
(function(TiQuery) {
	TiQuery.fn.extend({
		/**
		 * registers an event shortcut
		 */
		registerEvent: function(event) {		
			TiQuery.fn[event] = function(fn) {
				if (fn == null) {
					this.trigger(event);
				} else {	  
					this.bind(event, fn);
				}
				return TiQuery;
			}
		},
		
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
		}
	});
	
	var events = ['blur', 'cancel', 'click', 'dblclick', 'doubletap', 'focus', 'orientationchange', 'scroll', 'shake', 'singletap', 'swipe', 'touchcancel', 'touchend', 'touchmove', 'touchstart', 'twofingertap'];
	
	for(var i = 0, total = events.length; i < total; i++) {
		TiQuery.fn.registerEvent(events[i]);
	}
	
})(TiQuery);