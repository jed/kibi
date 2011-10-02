fs   = require("fs")
http = require("http")

server = http.createServer(function(req, res) {
  fs.readFile("./lib/html/uglycrushed/index.html", function(err, html) {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": html.length
    })

    res.end(html)
  })
})

server.listen(8080, function() {
  console.log("kibi listening on 8080")
})