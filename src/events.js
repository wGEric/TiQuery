/**
* events
*/
TiQuery.fn.extend({
   /**
	* binds an event to an object
	*/
   bind: function(type, fn) {
	   this[0].addEventListener(type, fn);
   },
   
   /**
	* helper functions
	*/
   click: function(fn) {
	   this.bind('click', fn);
   },
   
   dblclick: function(fn) {
	   this.bind('dblclick', fn);
   },
   
   doubletap: function(fn) {
	   this.bind('doubletap', fn);
   },
   
   singletap: function(fn) {
	   this.bind('singletap', fn);
   },
   
   swipe: function(fn) {
	   this.bind('swipe', fn);
   },
   
   touchcancel: function(fn) {
	   this.bind('touchcancel', fn);
   },
   
   touchend: function(fn) {
	   this.bind('touchend', fn);
   },
   
   touchmove: function(fn) {
	   this.bind('touchmove', fn);
   },
   
   touchstart: function(fn) {
	   this.bind('touchstart', fn);
   },
   
   twofingertap: function(fn) {
	   this.bind('twofingertap', fn);
   }
});
