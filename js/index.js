var inputImg = document.getElementById("input-img");

var img = new Image();
img.crossOrigin = "Anonymous";
img.src = inputImg.src;
var canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

var time = 0;
var step = 50;

var fns = [alden, dante, david, liam, matthew, zack2];
fns = ShuffleArray(fns);

var loop = function() {

	ctx.drawImage(img, 0, 0);
	var myImageData = ctx.getImageData(0,0,canvas.width, canvas.height);
	myImageData.t = time;
	time += step/1000;

	var length = fns.length;
	for (var ii = 0; ii < length; ii++) {
		myImageData = fns[ii](myImageData);
	}
	ctx.putImageData(myImageData, 0, 0);

	setTimeout(loop, time);
};
img.onload = loop;
