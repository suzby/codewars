function sortArray(array) {
    //return a sorted array
    const even = array.map((elm)=> elm % 2 === 0 ? elm : "");
    const odd = array.filter((elm)=> elm % 2 !== 0).sort((a,b)=> a-b);
    const result = []
    
    for(let i=0, j=0; i<array.length; i++){
     if(even[i] === "") {
       result.push(odd[+j]);
       j += 1
     } else {
       result.push(even[i])
     }   
  }
    return result
  }
/*
  You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
BEST PRACTICE
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
*/