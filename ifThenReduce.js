function findSum(n) {
    let array = []
    let count = 0
    while( count <= n){
      if(count % 3 === 0 || count % 5 === 0){
        array.push(count)
      }
      count ++
    }
    return array.reduce((a,b)=> a+b);
  }

  //or 
  
  function findSum(n) {
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 ===0 || i % 5 === 0) result += i
  }
  return result
}