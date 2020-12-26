window.images = [];
document.addEventListener('scroll', function(e) {
	var images = [];
	try {
		$('img.FFVAD').each(function() {
			const srcset = $(this).attr('srcset'),
				srcs = srcset.split(','),
				src640 = srcs[srcs.length - 1].replace(' 640w', '');
			images.push(src640);
			// chrome.runtime.sendMessage(src640);
		});
		window.images = [ ...window.images, ...images ];
		window.images = [ ...new Set(window.images) ];
	} catch (err) {
		console.err(err);
	}
});
