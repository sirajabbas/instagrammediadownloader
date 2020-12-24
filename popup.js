document.addEventListener(
	'DOMContentLoaded',
	function() {
		var checkPageButton = document.getElementById('img-download');
		checkPageButton.addEventListener(
			'click',
			function() {
				function modifyDOM() {
					//You can play with your DOM here or check URL against your regex
					return document.body.innerHTML;
				}
				chrome.tabs.executeScript(
					{
						code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
					},
					(results) => {
						//Here we have just the innerHTML and not DOM structure
						console.log('Popup script:');
						console.log(results[0]);
						var dom_nodes = $($.parseHTML(results[0]));
						dom_nodes.find('img.FFVAD').each(function(item) {
							const srcset = $(this).attr('srcset'),
								srcs = srcset.split(','),
								src640 = srcs[srcs.length - 1].replace(' 640w', '');
							console.log('sending message');
							chrome.runtime.sendMessage(src640);
						});
					}
				);
			},
			false
		);
	},
	false
);
