var liam = function(imageData) {
  var data = imageData.data;
  var f = function(ii) {
    return ii };

  for (var i = 0; i < data.length; i += 4) {
    data[i]   = f(data[i]);   // red
    data[i+1] = f(data[i+1]); // green
    data[i+2] = f(data[i+2]); // blue
    data[i+3] = f(data[i+3]); // alpha
  }
  return imageData;
};
