function strCount(str, letter){  
    let count = 0
    let compString = str.split('')
    for(let i = 0;i<compString.length;i++){
      if (compString[i] === letter){
        count++
      }
        
    }
    return count
  }

  //or 
  
  function strCount(str, letter){  
    return str.split(letter).length-1
  }