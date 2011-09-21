/**
* Memory management
*
* see http://developer.appcelerator.com/question/116867/this-is-a-solution-to-your-memory-woes
*/
(function(TiQuery) {
	var Pool = function(rootWindow) {
		this.view;
		
		this.init = function() {
			// create the view and attach it to the root window
			this.view = Titanium.UI.createView();
			rootWindow.add(this.view);
		}
		
		/*
		 * releases the view from the pool allowing memory to be released
		 */
		this.release = function() {
			if (this.view != null) {			
				// create the hidden window
				_window = Titanium.UI.createWindow();
				_window.hide();
				_window.open();
				
				// remove view from the root window
				rootWindow.remove(this.view);
				
				// add the view to the hidden view
				_window.add(this.view);
				
				Titanium.API.info('Releasing memory');
				 
				 		// close the hidden window releasing memory
				_window.close();
				
				// clear window and view for next use
				_window = null;
				this.view = null;
			}
	    };
		
		this.init();
		
		return this;
	};
	
	TiQuery.extend({
		pool: (function() {
			var pools = [];
			
			/**
			 * gets a view from the pool
			 */
			this.get = function(rootWindow) {
				var pool = new Pool(rootWindow);
				
				pools.push(pool);
				
				return pool;
			}
			
			/**
			 * releases all views from the pool
			 */
			this.releaseAll = function() {
				var i,
					total = pools.length;
					
				for(i = 0; i < total; i++) {
					pools[i].release();
				}
				
				pools = [];
			}
			
			return this;
		})()
	});
})(TiQuery);