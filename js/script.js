$(document).ready(function() {
	// $("#drag_resize").resizable();
	$(function() {
	    $( "#drag_resize" ).resizable();
	    console.log("resize");
	  });
	chrome.storage.local.get("img_src",function(data){
		var img=document.createElement("img");
		console.log(img);
		img.setAttribute("src", data.img_src);
		img.setAttribute("height", "300px");
		img.setAttribute("width", "500px");

		cropImage(img);
	});

	function cropImage(img) {
		//console.log("in crop img fun");

		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		
		// draw cropped image
		var sourceX = 150;
		var sourceY = 0;
		var sourceWidth = 150;
		var sourceHeight = 150;
		var destWidth = sourceWidth;
		var destHeight = sourceHeight;
		var destX = canvas.width / 2 - destWidth / 2;
		var destY = canvas.height / 2 - destHeight / 2;

		context.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
	}
});
