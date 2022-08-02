function findMultiples(integer, limit) {
  let array = []
  let integerValue = integer
  while (integerValue <= limit){
    array.push(integerValue)
    integerValue += integer
  }
  return array
}

// or

function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }