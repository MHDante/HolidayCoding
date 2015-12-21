var zack = function(imageData) {
  var data = imageData.data;
  var f = function(ii) {
    return 0.5 * Math.sin(i / 10000) + 0.5; };
  for (var i = 0; i < data.length; i += 4) {
    data[i]   *= f(i);   // red
    data[i+1] *= f(i+1); // green
    data[i+2] *= f(i+2); // blue
    //data[i + 3] = 0;
  }
  return imageData;
};
