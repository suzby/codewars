function fakeBin(x){
    let binX = x.split('')
    for(let i = 0;i<x.length;i++){
       if(binX[i] < 5){
         binX[i] = 0
       } else {
         binX[i] = 1
       }
    }
    return binX.join('')
  }

  /*
  Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

BEST PRACTICE----


function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
*/