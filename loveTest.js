function lovefunc(flower1, flower2){
    let loveTest = false
    if(flower1 % 2 === 0 && flower2 % 2 != 0){
      loveTest = true
    } else if (flower1 % 2 != 0 && flower2 % 2 === 0){
      loveTest = true
    }
    return loveTest
  }