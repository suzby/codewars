function countBy(x, n) {
    let z = [];
    let xPlus = x
    while (z.length < n){
      z.push(xPlus)
      xPlus = xPlus + x
    }  
    return z;
  }