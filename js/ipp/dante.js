var dante = function(imageData) {


  var data = imageData.data;
  var xOf = function(ii) {
   return  ((ii/4) % width)/width ;
  };
  var yOf = function(ii) {
   return  ((ii/4) / width)/height ;
  };


  var heatXs = [0.2, 0.5, 0.7];
  var heatYs = [0.2, 0.5, 0.7];

  for (var i = 0; i < data.length; i += 4) {
    var x = xOf(i);
    var y = yOf(i);
    var d1 = Distance(heatXs[0], heatYs[0], x, y)
    var d2 = Distance(heatXs[1], heatYs[1], x, y)
    var d3 = Distance(heatXs[2], heatYs[2], x, y)
    data[i]   *= (1+d1)*8;
    data[i+1] *= (1+d2)*8;
    data[i+2] *= (1+d3)*8;
  }

  return imageData;
};
