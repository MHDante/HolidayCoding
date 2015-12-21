/*var alden = function(imageData) {
  var data = imageData.data;
  var f = function(ii) {
    
    return ii; };

  for (var i = 0; i < data.length; i += 4) {
    data[i]   = f(data[i]);   // red
    data[i+1] = f(data[i+1]); // green
    data[i+2] = f(data[i+2]); // blue
    data[i+3] = f(data[i+3]); // alpha
  }
  return imageData;
};*/


var alden = function(input) {
   output = input;
   for(var i = 0; i < output.length; i += 4) {
     var rsum = 0;
     var gsum = 0;
     var bsum = 0;
     var rad = 10;
     var cnt = 0;
     for(var j = -rad*4; j <= rad*4; j += 4) {
       if(j >= 0 && j < output.length) {
         cnt++;
         rsum += input[j];
         gsum += input[j+1];
         bsum += input[j+2];
       }
     }
     output[i] = rsum / cnt;
     output[i+1] = gsum / cnt;
     output[i+2] = bsum / cnt;
   }
   //return output;
   return input;
};
