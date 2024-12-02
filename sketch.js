function setup() {
  loadJSON("https://openholidaysapi.org/Countries", printData);
}

function printData(data) {
  console.log(data);
}