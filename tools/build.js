console.log("building kibi.js...")

var fs = require("fs")
  , crush = require("./jscrush")
  , uglify = require("uglify-js")

  , html = fs.readFileSync("./src/index.html", "utf8")

  , builds = {}

builds.raw = fs.readFileSync("./src/kibi.js")
builds.uglified = Buffer(uglify(builds.raw.toString()).replace(/"/g,"'"))
builds.crushed = Buffer(crush(builds.raw))
builds.uglycrushed = Buffer(crush(builds.uglified))

for(var name in builds) {
  var build = builds[name]
    , markup = html.replace("KIBI_SOURCE", build)

  console.log("- %s: %s bytes", name, build.length)

  fs.writeFileSync("./lib/js/" + name + ".js", build)
  fs.writeFileSync("./lib/html/" + name + "/index.html", markup)
}

console.log(
  "kibi.js built successfully: %s bytes (%s)",
  builds.uglycrushed.length,
  builds.uglycrushed.length-1024
)
