console.log("building kibi.js...")

fs = require("fs")
uglify = require("uglify-js")

source = fs.readFileSync("./src/kibi.js", "utf8")
uglified = uglify(source)
crushed = jscrush(source)
uglycrushed = jscrush(uglified)

console.log("- original...... %s bytes", Buffer.byteLength(source))
console.log("- uglified...... %s bytes", Buffer.byteLength(uglified))
console.log("- crushed....... %s bytes", Buffer.byteLength(crushed))
console.log("- uglycrushed... %s bytes", Buffer.byteLength(uglycrushed))

html = fs
  .readFileSync("./src/index.html", "utf8")
  .replace("KIBI_SOURCE", crushed)

fs.writeFileSync("./lib/kibi.js", crushed)
fs.writeFileSync("./lib/index.html", html)

console.log(
  "kibi.js built successfully: %s bytes (%s)",
  Buffer.byteLength(crushed),
  Buffer.byteLength(crushed)-1024
)

// adapted from @aivopaas's jscrush
// http://www.iteral.com/jscrush/
function jscrush(code) {
  $ = "~"

  for(
    i=123;
    --i>1;
    i-47||(i=38),i-63||(i=57),i-94||(i=90),i-10&&i-13&&i-34&&i-36&&($+=String.fromCharCode(i))
  );

  $ = $.split("")

  for(s=code.replace(/\/\/.*\n|[\n\r]+[\t ]*/g,''),m=[],S=s.length;;){
    for(c=M=0,i=99;!c&&i--;)!~s.indexOf($[i])&&(c=$[i]);
    if(!c)break;
    for(t=1;t++;){
      for(o={},n=s.length-t,i=e=0;i<n;i++)
        if(!o[x=s.substr(i,t)]&&!~x.indexOf('$'))
          for(o[x]=0,j=i+t;~j;o[x]++)j=s.indexOf(x,j+t);
      for(i in o)o[i]>1&&++e,o[i]=o[i]*(t-1)-t-1,o[i]>M&&(M=o[I=i]);
      if(!e)break;
    }
    if(!M)break;
    s=s.replace(RegExp(I.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&'),'g'),c);
    m.push(c+I.replace(/\\/g,'\\\\'));
  }

  // console.log(JSON.stringify(s))
  // console.log(m)
  // console.log(JSON.stringify(""))

  str = s.replace(/["\\]/g,'\\$&')
  map = m.reverse().join('').replace(/"/g,'\\"')

  // console.log(JSON.stringify(map))

  fn  = 'function(a,b,c,d,e){for(c in b)a=a.replace(RegExp(b[c][0],"g"),b[c].slice(1));eval(a)}'

  return '!'+fn+'("'+str+'","'+map+'".split(""))'
}