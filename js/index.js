var inputImg = document.getElementById("input-img");

var img = new Image();
img.src = inputImg.src;

var canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

var time = 0;
var step = 50;

var fns = [alden, dante, david, liam, matthew, zack2];
fns = ShuffleArray(fns);

var draw = function(img) {
	ctx.drawImage(img, 0, 0);
	var myImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	myImageData.t = time;
	time += step/1000;

	for (var i = 0; i < fns.length; i++) {
		myImageData = fns[i](myImageData);
	}
	ctx.putImageData(myImageData, 0, 0);

	setTimeout(function() {
		draw(img);
	}, time);
};

img.onload = function() {
	draw(this);
}
