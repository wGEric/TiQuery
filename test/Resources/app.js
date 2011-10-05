var tabGroup = Titanium.UI.createTabGroup();

var testsWindow = Titanium.UI.createWindow({
	url: "tests.js",
	title: "Unit Tests",
	backgroundColor: "#000000"
});

var testsTab = Titanium.UI.createTab({
	window: testsWindow,
	title: testsWindow.title
});

tabGroup.addTab(testsTab);

var memoryWindow = Titanium.UI.createWindow({
	url: "memory.js",
	title: "Memory Tests",
	backgroundColor: "#000000"
});

var memoryTab = Titanium.UI.createTab({
	window: memoryWindow,
	title: memoryWindow.title
});

tabGroup.addTab(memoryTab);

tabGroup.open();