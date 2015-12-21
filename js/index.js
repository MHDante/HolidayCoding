var inputImg = document.getElementById("input-img");
var width = 256;
var height = 256;
var img = new Image();
img.crossOrigin = "Anonymous";
img.src = inputImg.src;
var canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');


img.onload = function() {

	ctx.drawImage(img, 0, 0);
	var myImageData = ctx.getImageData(0,0,canvas.width, canvas.height);
	var data = myImageData.data;
	for (var i = 0; i < data.length; i += 4) {
		data[i]     = Random(255); // red
		data[i + 1] = Random(255); // green
		data[i + 2] = Random(255); // blue
		data[i + 3] = 255;
	}

	var fns = [alden, dante, david, liam, matthew, zack2];
	fns = ShuffleArray(fns);

	var length = fns.length;
	for (var ii = 0; ii < length; ii++) {
		myImageData = fns[ii](myImageData);
	}
	ctx.putImageData(myImageData, 0, 0);
};
