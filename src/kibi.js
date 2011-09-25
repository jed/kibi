with(o=function f(a,b,c,d,e){
  for(b in a){
    for(c=d=0;e=b.charCodeAt(c++);d%=934)d+=c*e;
    o[(d+360).toString(36)]=b
  }
}){
  o.S='script';
  o.K='kibi';

  o(o.W=top);
  o(o.D=W[fk]);
  o(o.B=D[eq]);
  o(W[e2]);  

  o.T=function f(a,b,c,d,e){
    return a[bw](/#{([^}]*)}/g, function f(a,c){
      return Function('return '+c).call(b)
    })
  };

  o.R=[];
  o.I=0;

  for(;a=D[iw](o.S)[I++];)
    /kibi$/.test(a.type)&&
      R.push([
        a[fx],
        a[yv]('data-'+b1),
        a[yv]('data-'+e2)
      ]);

  o.J=function f(a,b,c,d,e){
    B[cr](D[e5](o.S)).src=a+(c=o.S+I++);
    W[c]=function f(a){W[c]=b(a)}
  };

  W[o0](function f(a,b,c,d,e){
    a=W[e2];
    a=a[b1]+a[ir]+a[dh];
    if(o.L!=a){ // location changed
      o.L=a;
      for(b=0;c=R[b++];){
        if(d=!c[1]||a.match(c[1])){ // location matches or 404
          e=function f(a){
            B[fx]=T(c[0],a);
          };
          return c[2]?J(c[2],e):e(a)          
        }
      }
    }
  },50)
}