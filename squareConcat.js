function squareDigits(num){
    let numString = Array.from(String(num),Number)
    let results = []
    for(let i=0;i<numString.length;i++){ 
       results.push(Math.pow(numString[i], 2))
    }
     return +results.join('')
   }

   /*
   Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

   For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
   
   Note: The function accepts an integer and returns an integer

   BEST PRACTICE:

   function squareDigits(num){
        return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

*/   