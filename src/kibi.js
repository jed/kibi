with(l={}) { // l = lookup table
  for(w=k=top;k;k=k[fk]||k[eq]) // w = window
    for(d in k){
      for(b=i=0;j=d.charCodeAt(b++);i%=934)
        i+=b*j;
      l[(i+360).toString(36)]=d
    }

  d=w[fk]; // d = document
  b=d[eq]; // b = body
  i=0;     // i = global integer counter
  j;       // not used yet

  k = kibi = function f(x,y,z){}; // k = kibi

  k.fetch = function f(x,y,z){b[cr](d[e5]('script')).src=x+(z=ja+i++);w[z]=function f(x){w[z]=y(x)}};
  k.template = function f(x,y,z){return function(c,d){return x.replace(/#{([^}]*)}/g,function(x,e){return Function("x","with(x)return "+e).call(c,d||y||{})})}}

}