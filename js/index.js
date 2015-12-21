var inputImg = document.getElementById("input-img");

var img = new Image();
img.src = inputImg.src;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var time = 0;
var step = 50;

var functionMap = {
	'alden': { func: alden, checked: false },
	'dante': { func: dante, checked: false },
	'david': { func: david, checked: false },
	'liam': { func: liam, checked: false },
	'matthew': { func: matthew, checked: false },
	'zack': { func: zack2, checked: false },
};
var checkedFuncs = 0;
//var fns = [alden, dante, david, liam, matthew, zack2];
var fns = [];
for(var name in functionMap) {
	fns.push(functionMap[name].func);
}
var shuffled = ShuffleArray(fns);
var keysArray = new Array(fns.length);

var draw = function(img) {
	ctx.drawImage(img, 0, 0);
	var myImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	myImageData.t = time;
	time += step/1000;

	if (checkedFuncs <= 0) {
		var length = shuffled.length;
		for (var ii = 0; ii < length; ii++) {
			myImageData = shuffled[ii](myImageData);
		}
	} else {
		for(var name in functionMap) {
			var obj = functionMap[name];
			if (obj.checked) myImageData = obj.func(myImageData);
		}
	}
	ctx.putImageData(myImageData, 0, 0);

	setTimeout(function() {
		draw(img);
	}, time);
};

function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '120px';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
		var keys = Object.keys(functionMap);
    for (var i = 0; i < keys.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 2; j++) {
              var td = document.createElement('td');
							var key = keys[i];
							if (j == 0) {
              	td.appendChild(document.createTextNode(key));
							} else if (j == 1) {
								var checkbox = document.createElement('input');
								checkbox.type = "checkbox";
								checkbox.name = "name";
								checkbox.value = "value";
								checkbox.id = "checkbox-id";
								td.appendChild(checkbox);
								checkbox.onclick = (function(funcName) {
									return function() {
										var prevChecked = functionMap[funcName].checked;
										//if (prevChecked !== this.checked) {
											if (this.checked) {
												checkedFuncs += 1;
											} else {
												checkedFuncs -= 1;
											}
											functionMap[funcName].checked = this.checked;
										//}
									}
								})(key);


							}
              tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
};
tableCreate();

img.onload = function() {
	draw(this);
}
