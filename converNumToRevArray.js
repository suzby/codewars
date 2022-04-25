
function digitize(n) {
    let array = [];
    let newN = n.toString().split('').reverse()
    newN.forEach(str => {
      array.push(Number(str))
    })
     return array
   }

/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/