var images = [];
document.addEventListener(
	'DOMContentLoaded',
	function() {
		var checkPageButton = document.getElementById('img-download');

		checkPageButton.addEventListener('click',
			function() {
				console.log('clicked');
				chrome.tabs.query({active: true}, function(tabs) {
					var tab = tabs[0];
					tab_title = tab.title;
					chrome.tabs.executeScript(tab.id, {
					  code: 'window.images'
					}, function(res){
					
						chrome.runtime.sendMessage(res[0]|| [])
					});
				})
			
			},
			false
		);
	},
	false
);

chrome.tabs.query({ active: true }, function(tabs) {
	chrome.tabs.executeScript(null, { file: 'jquery-3.5.1.min.js' }, function() {
		chrome.tabs.executeScript(null, { file: 'content.js' });
		chrome.tabs.executeScript(null, { file: 'task.js' },function(result){
			console.log("res",result)
		});
	});
});