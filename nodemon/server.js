const http = require("http");

const server = http.createServer(async (req, res) => {
  console.log("request2");
  res.writeHead(200);
  res.end("Hello world2");
});
server.listen(8080);
