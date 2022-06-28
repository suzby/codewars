function powersOfTwo(n){
    let twoPower = []
    let i = 0
    while ( i <= n) {
      let hold = 2 ** i
      twoPower.push(hold)
      i++
    }
    return twoPower
  }

  //or 

  function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }

  //or
  
  function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }