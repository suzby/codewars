function descendingOrder(n) {
    let sorter = n.toString().split('')
    sorter.sort((a,b) => a < b ? +1 : -1 || a == b)
    return +sorter.join('')
   }

   
   /*
   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
   */