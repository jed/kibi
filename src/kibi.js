with(
  kibi=o=function(a,b,c,d,e){
    for(c in a){
      for(d=a=0;e=c.charCodeAt(d++);a%=934)a+=d*e;
      b[(a+360).toString(36)]=c
    }
  }
){
  o(o.W=top,o);
  o(o.D=W[fk],o);
  o(o.B=D[eq],o);
  o(o.H=W[lb],o);
  o(W[e2],o);

  B.onclick=function(a,b,c,d,e){
    a=(a||W[u6]).target;
    if(a[yv]('data-kibi')){
      b=a[yv]('href');
      H[o.bs]?H[bs](0,0,b):W[e2].hash=b;
      return!1;
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

  o.J=function(a,b,c,d,e){
    B[cr](D[e5]('script')).src=a+(c='script'+I++);
    B[cr](S);
    S[fx]='|';
    W[c]=function(a){
      setTimeout(function(){
        B[er](S);
        W[c]=b(a)
      },2000)
    }
  };

  o.U=function(a,b,c,d,e){
    for(b=0;c=D[iw]('script')[b++];)
      if(c[yv]('data-kibi')){
        d=c[yv]('data-kibi-'+b1);
        if(!d||a.match(d)){
          b=c[fx];
          c=c[yv]('data-kibi-'+e2);
          e=function(a){
            B[fx]=T(b,a);
          };
          c?J(T(c),e):e(a);
          return
        }
      }
  };

  W[o0](o.P=function(a,b,c,d,e){
    S[fx]+='|';
    a=W[e2][b1]+W[e2][ir];
    L==a||U(L=a)
  },50);

  P()
}