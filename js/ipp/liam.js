var liam = function(imageData) {
  var data = imageData.data;
  var f = function(data, index) {
      var w = canvas.width * 4;
      var h = canvas.height;
      var x = index % w;
      var y = index / h;
      var centerX = w / 2;
      var centerY = h / 2 + 400;
      var diffX = centerX - x;
      var diffY = centerY - y;
      var dist = Math.sqrt(diffX * diffX + diffY * diffY);
      return data * (Math.sin((dist / 5) + imageData.t * 100) + 1);
  };

  for (var i = 0; i < data.length; i += 4) {
    data[i]   = f(data[i], i);   // red
    data[i+1] = f(data[i+1], i); // green
    data[i+2] = f(data[i+2], i); // blue
    data[i+3] = f(data[i+3], i); // alpha
  }
  return imageData;
};
