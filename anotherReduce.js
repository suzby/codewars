function grow(x){
    let total = 1
    let totalElements = x.reduce((previousValue, currentValue)=> previousValue * currentValue, total)
    return totalElements
  }
  
  //P - array
  //R - integer total
  //E - provided
  //P - iterate over array, multiply i * i+1, return total
  /*
  Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
BEST PRACTICE:
const grow=x=> x.reduce((a,b) => a*b);

  */