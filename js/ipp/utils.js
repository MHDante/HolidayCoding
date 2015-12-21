var width = 256;
var height = 256;
var Random = function(x){
  return Math.floor((Math.random() * x) + 1);
}
var ShuffleArray = function(array) {
for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
return array;
}
