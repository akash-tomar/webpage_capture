chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	//alert("blah");
	if(request.greeting=="hello") {
		chrome.tabs.captureVisibleTab(null, {}, function(dataUrl) {
			//sendResponse({"img_src": dataUrl});
			console.log(dataUrl);
			chrome.storage.local.set({'img_src':dataUrl},function(){
				console.log('img_src saved to storage');
				//location.reload();
			});
		});
	}
});