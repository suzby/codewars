var number = function(array){
  let n = 1
  if (array.length > 0){
    for(let i=0;i<array.length;i++){
      array[i] = `${n}: ${array[i]}`
      n++
    
    }
  
  }
   return array
}

var number = function(array){
    const resultArr = []
    for(let i=0,j=1;i<array.length; i++){
      if(array.length === 0){
        return 'Empty arrray should return empty array'
      } else{
       resultArr.push(`${j}: ${array[i]}`)
        j += 1
      }
    }
    
    return resultArr
    
    }
  
    var number = function(array) {
        return array.map(function (line, index) {
          return (index + 1) + ": " + line;
        });
      }