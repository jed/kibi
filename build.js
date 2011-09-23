fs = require("fs")

functions = [
  function(){return 1},
  function(){return 2},
  function(){return 3}
]

boilerplate = function a(b,c,d,e,f){8//8KIBI_METHODS8
for(b=(a+a).split(8,KIBI_COUNT),c=2;d=b[c++];)eval("this."+(c+18).toString(36)+"="+b[0]+d+"}")}

source = new Buffer(kibify(functions))

fs.writeFile("./kibi.js", source, function(err) {
  if (err) throw err

  console.log("kibi.js built successfully.")
  console.log("total size: %s bytes", source.length)
})

function kibify(args) {
  args = args.map(function(x){ return (x+"").match(/{(.*)}/)[1] })

  return ("kibi=new " + boilerplate)
    .replace("KIBI_METHODS", args.join(8))
    .replace("KIBI_COUNT", args.length + 2)
}