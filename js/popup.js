$(document).ready(function() {
	chrome.runtime.sendMessage({"greeting": "hello"}, function(response) {
		console.log("msg sent");
	  	// var img_src=response.img_src;
	  	// console.log(img_src);
	  	// chrome.runtime.sendMessage({"img_src":img_src},function(res) {
	  	// 	console.log("img src sent to script.js");
	  	// });
	});
});