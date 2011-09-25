with(o=function(a,b,c,d,e){
  for(b in a){
    for(c=d=0;e=b.charCodeAt(c++);d%=934)d+=c*e;
    o[(d+360).toString(36)]=b
  }
}){
  o.K='kibi';

  o(o.W=top);
  o(o.D=W[fk]);
  o(o.B=D[eq]);
  o(W[e2]);

  o.L=o.I=o.C=0;

  o.T=function(a,b,c,d,e){
    return a[bw](/<%(.*?)%>/g, function(a,c){
      return Function('return '+c).call(b)
    })
  };

  o.S=D[e5]('b');
  S.id=K+is;
  W[o0](function(a,b,c,d,e){
    S[fx]='◴◷◶◵'.charAt(C++%4)
  },360);

  for(o.R=[];a=D[iw](o.s='script')[I++];)
    a.type.match(K)&&
      R.push([
        a[fx],
        a[yv]('data-'+b1),
        a[yv]('data-'+e2)
      ]);

  o.J=function(a,b,c,d,e){
    B[cr](D[e5](o.s)).src=a+(c=o.s+I++);
    B[cr](S);
    W[c]=function(a){
      B[er](S);
      W[c]=b(a)
    }
  };

  o.U=function(a,b,c,d,e){
    for(b=0;c=R[b++];){
      if(d=!c[1]||a.match(c[1])){ // location matches or 404
        e=function(a){
          B[fx]=T(c[0],a);
        };

        c[2] ? J(T(c[2]),e) : e(a);

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