var width = 256;
var height = 256;
var Random = function(x){
  return Math.floor((Math.random() * x) + 1);
}
var ShuffleArray = function(array) {
  var newarr = array.slice();
for (var i = newarr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = newarr[i];
    newarr[i] = newarr[j];
    newarr[j] = temp;
  }
  return newarr;
}
var Distance = function(x1,y1, x2, y2){
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx*dx,dy*dy);

}
