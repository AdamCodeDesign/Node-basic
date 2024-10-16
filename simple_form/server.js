let http = require("http");

let { parse } = require("querystring");

const htmlForm = `
    <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title> Formularz</title>
        </head>
        <body>
            <form method="post">
                Imię: <input type = "text" name= "name"> <br>
                Nazwisko: <input type = "text" name= "surname"> <br>
                Email: <input type = "text" name= "email"> <br>
                <input type = 'submit' value = 'wyślij'>
            </form>
        </body>
    </html>
`;
http
  .createServer(function (req, res) {
    let data = "";

    req.on("data", function (chunk) {
      data += chunk;
    });

    req.on("end", function () {
      const parsed = parse(data);
      console.log(JSON.stringify(parsed));

      res.writeHead(200);
      res.write(htmlForm);
      res.end();
    });
  })
  .listen(8080);
