chrome.runtime.onMessage.addListener(function(arg, sender, sendResponse) {
	var img_urls = arg;
	var saveas;
	try {
		saveas = function uuidv4() {
			return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
			  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
			);
		  }		  
	} catch (problem) {
		console.error(problem)
	}
	console.log(`images found: ${img_urls.length}`)
	img_urls.forEach(element => {
		chrome.downloads.download({
			url: element,
			filename: saveas()+'.jpg',
			saveAs: false
		});
	});
});



