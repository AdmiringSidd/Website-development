var points = [40, 100, 1, 5, 25, 10];
console.log(points);

function ascending() {
  points.sort(function(a, b) { return a - b });
  console.log(points);
}

function descending() {
  points.sort(function(a, b) { return b - a });
  console.log(points);
}

ascending();
descending();