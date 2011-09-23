fs = require("fs")

functions = [
  function(){return 1},
  function(){return 2},
  function(){return 3}
]

source = fs.readFileSync("./src/kibi.js", "utf8")
html = fs.readFileSync("./src/index.html", "utf8")

source = source
  .replace("KIBI_COUNT", functions.length + 2)
  .replace("KIBI_METHODS", functions
    .map(function(x){ return (x+"").match(/{(.*)}/)[1]})
    .join(8)
  )

html = html
  .replace("KIBI_SOURCE", source)

fs.writeFileSync("./kibi.js", source)
fs.writeFileSync("./index.html", html)

console.log("kibi.js built successfully.")
console.log("total size: %s bytes", Buffer.byteLength(source))