var liam = function(imageData) {
  var data = imageData.data;
  var f = function(data, index) {
      var x = index % canvas.width;
      var y = index / canvas.height;
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2 + 400;
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
