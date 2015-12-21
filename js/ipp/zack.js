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
var width = 256;
var height = 256;
var zack2 = function(imageData) {
  var data = imageData.data;
  var f = function(ii, div) {
    return 0.5 * Math.sin(ii / div) + 0.5;
  };
  var ff = function(ii, t) {
    var col = ii % width;
    var row = Math.floor(ii / width);
    var tfact = t * 100;
    return f((row+col+t*tfact)/100, 1) * f(ii*tfact, 10000);
  };
  for (var i = 0; i < data.length; i += 4) {
    data[i]   *= ff(i,t);   // red
    data[i+1] *= ff(i+1,t); // green
    data[i+2] *= ff(i+2,t); // blue
    //data[i + 3] = 0;
  }
  return imageData;
};
