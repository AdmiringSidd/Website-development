var numbers = [28, 6, 19, 95];

function myFunction(num) {
  return num * 50;
}

var newArray = numbers.map(myFunction);
console.log(newArray);