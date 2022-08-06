function twoSum(numbers, target) {
    for( let i = 0, j = 1; i < numbers.length-1; ){
     let sum = numbers[i] + numbers[j];
      if( sum === target && i != j ){
        return [i,j]
      } else if( sum != target && j <= numbers.length-1){
        j++
      } else if ( j > numbers.length-1 ){
        j=1
        i++
      }
     }
    }
  // optimized

  function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}