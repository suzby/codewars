
   if ( a === b) {
    return a
  } else {
    let sum = 0;
    let holdA = 0;
    let holdB = 0;
    
    while(holdB <= b){
      sum += holdB
      holdB++
    }
    return sum
  }