with(
  kibi=o=function(a,b,c,d,e){
    for(b in a){
      for(c=d=0;e=b.charCodeAt(c++);d%=934)d+=c*e;
      o[(d+360).toString(36)]=b
    }
  }
){
  o(o.W=top);
  o(o.D=W[fk]);
  o(o.B=D[eq]);
  o(o.H=W[lb]);
  o(W[e2]);

  o.A=o.bs&&H[bs];

  B.onclick=function(a,b,c,d,e){
    a=(a||W[u6]).target;
    if(a[yv]('data-')){
      b=a[yv]('href');
      A?H[bs](0,0,b):W[e2].hash=b;
      return!1
    }
  };

  o.L=o.I=o.C=0;

  o.T=function(a,b,c,d,e){
    return a[bw](/<%(.*?)%>/g, function(a,c){
      return Function('return '+c).call(b)
    })
  };

  o.S=D[e5]('b');
  S.id='kibi'+is;
  W[o0](function(a,b,c,d,e){
    S[fx]='◴◷◶◵'.charAt(C++%4)
  },360);

  o.J=function(a,b,c,d,e){
    B[cr](D[e5]('script')).src=a+(c='script'+I++);
    B[cr](S);
    W[c]=function(a){
      B[er](S);
      W[c]=b(a)
    }
  };

  o.U=function(a,b,c,d,e){
    for(b=0;c=D[iw]('script')[b++];)
      if(c.type.match('kibi')){
        d=c[yv]('data-'+b1);
        if(!d||a.match(d)){
          b=c[fx];
          c=c[yv]('data-'+e2);
          e=function(a){
            B[fx]=T(b,a);
          };
          c?J(T(c),e):e(a);
          return
        }
      }
  };

  W[o0](o.P=function(a,b,c,d,e){
    a=W[e2];
    a=a[b1]+a[ir]+a[dh];
    L==a||U(L=a)
  },99);

  P()
}