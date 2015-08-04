myMax = function(array){
  var max = 0;
  for(var x in array){
    if (array[x] > max) {
      max = array[x];
    };
  };
  console.log(max)
};

array = [1,2,3,4,5,4,3,2,1];

myMax(array);

vowel_count = function (string) {

  var count = 0

  for(var x in string){
    if (string[x] === "a" || string[x] === "e" || string[x] === "i" || string[x] === "o" || string[x] === "u") {
      count += 1;
    };
  };
  console.log(count);
};

vowel_count("this is a string with vowels");

reverse = function (string) {
  var array_out = [];
  var array_in = string.split("");
  for (var x =0; x < string.length; x++) {
    var i = array_in.pop();
    array_out.push(i);
  };
  console.log(array_out.join(""));
};

reverse("this is a string to reverse");