chrome.runtime.onMessage.addListener(function(arg, sender, sendResponse) {
	console.log('msg');
	var img_url = arg;
	try {
		saveas = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		  })+'.jpg';
	} catch (problem) {}
	console.log('hit');
	chrome.downloads.download({
		url: img_url,
		filename: saveas,
		saveAs: false
	});
});

function sendResponse() {}
