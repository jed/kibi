fs      = require("fs")
jscrush = require("./jscrush")

source = fs.readFileSync("./src/kibi.js", "utf8")
source = jscrush(source)

html   = fs.readFileSync("./src/index.html", "utf8")
html   = html.replace("KIBI_SOURCE", source)

fs.writeFileSync("./kibi.js", source)
fs.writeFileSync("./index.html", html)

console.log("kibi.js built successfully.")
console.log("total size: %s bytes", Buffer.byteLength(source))