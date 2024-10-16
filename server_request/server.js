const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("to jest req.url: " + req.url + "<br>");

    let parsedUrl = url.parse(req.url, true);
    res.write("to jest parsedUrl.pathname: " + parsedUrl.pathname + "<br>");

    let json = JSON.stringify(parsedUrl);
    res.write('to jest json' + json + "<br>");
    res.end('a to nie wiem');
  })
  .listen(8080);
