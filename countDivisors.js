function getDivisorsCnt(n){
    let divisorsCount = 1
    for (let i = 1; i < n; i++) {
      if( n % i === 0 ){
        divisorsCount++
      }
    }
  return divisorsCount
  
}