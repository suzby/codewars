var summation = function (num) {
    let total = 0
    let hold = 0
    while (hold <= num) {
      total += hold
      hold++
    }
    return total
  }

  /* FIRST TRYY

  Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.



  
BEST PRACTICE
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}
*/