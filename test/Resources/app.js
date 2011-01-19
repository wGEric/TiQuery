Titanium.include('tiquery.js');

$.get('http://www.google.com', function(data) {
	$.info(data);
});

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



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
