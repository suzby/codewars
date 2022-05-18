function duplicateCount(text){

let counter = 0
let myObj = {}

text.toLowerCase().split('').map(str =>{
  if (!myObj.hasOwnProperty(str)) {
    myObj[str] = 0
  } else {
    if (myObj[str]===0 ) {
      counter+=1
    }
    myObj[str] = myObj[str] + 1
  }
})
return counter

}
  
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

/* BEST PRACTICE
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
*/