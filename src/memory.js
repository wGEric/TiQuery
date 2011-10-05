/**
* Memory management
*
* see http://developer.appcelerator.com/question/116867/this-is-a-solution-to-your-memory-woes
*/
(function(TiQuery) {
	TiQuery.extend({
		release: function(view, window) {
			if (!view) {
				return false;
			}
			
			if (!window) {
				window = Titanium.UI.currentWindow;
			}
			
			// create the hidden window
			memWindow = Titanium.UI.createWindow();
			memWindow.hide();
			memWindow.open();
			
			// remove the view from the window
			window.remove(view);
			
			// add the view to the hidden window
			if (TiQuery.isArray(view)) {
				for(var i = 0, total = view.length; i < total; i += 1) {
					memWindow.add(view[i]);
				}
			} else {
				memWindow.add(view);
			}
			
			// close the window releasing memory
			memWindow.close();
			
			memWindow = null;
			view = null;
		}
	});
})(TiQuery);