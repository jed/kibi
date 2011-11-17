fs   = require("fs")
http = require("http")

port = process.env.PORT || 8080

server = http.createServer(function(req, res) {
  fs.readFile("./lib/html/uglycrushed/index.html", function(err, html) {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": html.length
    })

    res.end(html)
  })
})

server.listen(port, function() {
  console.log("kibi listening on %s", port)
})