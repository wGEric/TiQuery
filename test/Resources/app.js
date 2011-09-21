Titanium.include('tiquery.js');

$.xhr({
	url:		'http://www.google.com',
	onLoad:		function(data) {
		$.info(data);
	},
	headers: {one: 'value1', two: 'value2'}
});

$.get('http://www.google.com', function(data) {
		$.info(data);
	}, {three: 'value3', four: 'value4'});

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = $.TabGroup();


//
// create base UI tab and root window
//
var win1 = $.Window({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = $.Tab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = new $.Label({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

$(label1).click(function() {
	alert('click');
}).click(function() { alert('click2'); });


//
// create controls tab and root window
//
var win2 = $.Window({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = $.Tab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = $.Label({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

var imagePool = $.pool.get(win2);
var imageContainer = imagePool.view;

var addImageButton = $.Button({
	title: 'Add 10 images',
	zIndex: 10000,
	right: 0,
	bottom: 0,
	width: 125,
	height: 20
});

$(addImageButton).click(function() {
	var i = 0;
	for(i = 0; i < 10; i += 1) {
		var now = new Date();
		var image = $.ImageView({
			image: 'http://www.cornify.com/getacorn.php?r=' + now.getTime() + '&url=https://github.com/naturalcodeproject/TiQuery',
		});
		
		imageContainer.add(image);
	}
});

win2.add(addImageButton);

var releaseButton = $.Button({
	title: 'Release Memory',
	zIndex: 10000,
	right: 140,
	bottom: 0,
	width: 125,
	height: 20
});

$(releaseButton).click(function() {
	//imagePool.release();
	$.pool.releaseAll();
	
	// create the view again for use
	imagePool = $.pool.get(win2);
	imageContainer = imagePool.view;
});

win2.add(releaseButton);

var memUsage = $.Label({
	title: Titanium.Platform.availableMemory,
	left: 0,
	bottom: 0,
	color: '#000000',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	height: 20,
	width: 200
});

win2.add(memUsage);

var updateMem = function() {
	memUsage.text = Titanium.Platform.availableMemory;
	setTimeout(updateMem, 1000);
}
updateMem();

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
