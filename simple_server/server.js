const http = require("http");

http
  .createServer(function (req, res) {
    if (req.url === "/favicon.ico") {
      res.writeHead(204, { "Content-type": "image/x-icon" });
      return res.end();
    }
    
    
    console.log('request');

    res.writeHead(200, { "Content-type": "text/html" });
    res.end("Hello World!!!");
  })
  .listen(8080);
