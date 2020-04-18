function iterativeLog(array) {
  array.forEach(element => console.log(element));
}

function iterate(callback) {
  var array = ['A', 'B'];
  array.forEach(element => callback(element));
  return array;
}

function doToArray(array, callback) {
  array.forEach(element => callback(element));
}