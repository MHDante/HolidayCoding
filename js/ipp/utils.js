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
