let fs = require("fs");

const fileName = "./data/appendFile.txt";

fs.appendFile(fileName, "next record.....", function (err) {
  if (err) throw err;

  console.log("data has been appended to: " + fileName);
});
