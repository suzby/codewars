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
  