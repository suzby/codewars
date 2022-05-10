function removeEveryOther(arr) {
    let i = arr.length
    while (i--)(i + 1) % 2 === 0 && (arr.splice(i, 1));
    return arr
  }
  // while(i--) :It means that if (i = i - 1) is bigger than 0, continue looping, other wise quit 

  /*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!


***********BEST PRACTICE:

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

*/