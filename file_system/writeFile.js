let fs = require("fs");

let newFileName = "./data/writeFile.txt";
let indexIncr = [];
let startIndex = 1;

function add() {
  indexIncr.push(startIndex);
  startIndex++;
  console.log(indexIncr);
  return indexIncr.reduce((a, b) => a + b, 0);
}

fs.writeFile(newFileName, `overwritten ${add()}`, function (err) {
  if (err) throw err;
  console.log("file overwritten: " + add());
});
