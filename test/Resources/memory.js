Titanium.include('tiquery.js');

var win = $.currentWindow();

var view = $.View({
	width: "100%",
	height: "100%"
});

win.add(view);

// memory display
var memory = $.Label({
	width: 'auto',
	height: 'auto',
	bottom: 0,
	left: 0,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	color: '#FFFFFF',
	zIndex: 1000
});

win.add(memory);

function updateMemory() {
	memory.text = Titanium.Platform.availableMemory;
	
	setTimeout(updateMemory, 500);
}

updateMemory();

// shapes button
var addShapesBttn = $.Button({
	width: 200,
	height: 30,
	title: "Add Shapes",
	bottom: 0,
	right: 0,
	zIndex: 1000
});

win.add(addShapesBttn);

var colors = [
	"red",
	"green",
	"yellow",
	"orange",
	"purple",
	"blue",
	"white"
];

var adding = false;
$(addShapesBttn).click(function() {
	if (adding == true) {
		return;
	}
	
	adding = true;
	
	for(var i = 0; i < 10; i += 1) {
		(function() {
			var shape = $.View({
				width: randomNumber(500),
				height: randomNumber(500),
				top: randomNumber(500),
				left: randomNumber(500),
				borderRadius: randomNumber(25),
				backgroundColor: colors[randomNumber(colors.length)]
			});
			
			view.add(shape);
		})()
	}
	
	adding = false;
});

var addImagesBttn = $.Button({
	width: 200,
	height: 30,
	title: "Add Images",
	bottom: 0,
	right: 220,
	zIndex: 1000
});
win.add(addImagesBttn);

$(addImagesBttn).click(function() {
	for(var i = 0; i < 10; i += 1) {
		(function() {
			var now = new Date();
			var image = $.ImageView({
				width: randomNumber(500),
				height: randomNumber(500),
				top: randomNumber(500),
				left: randomNumber(500),
				image: 'http://www.cornify.com/getacorn.php?r=' + now.getTime() + '&url=https://github.com/wGEric/TiQuery',
			})
			
			view.add(image);
		})();
	}
});

var releaseBttn = $.Button({
	width: 200,
	height: 30,
	title: "Release Memory",
	bottom: 0,
	right: 440,
	zIndex: 1000
});
win.add(releaseBttn);

$(releaseBttn).click(function() {
	$.release(view);
	
	view = $.View({
		width: "100%",
		height: "100%"
	});
	win.add(view);
});

function randomNumber(max) {
	return Math.floor(Math.random() * (max + 1));
}
