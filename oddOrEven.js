function oddOrEven(array) {
   let testNum = array.reduce((a,b)=> a+b,0)
   if(testNum % 2 != 0){
     return "odd"
   } else {
      return "even"
   }
}

//or

function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }