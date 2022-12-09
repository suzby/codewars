function removeExclamationMarks(s) {
  let sArray = s.split('')
  for(let i = 0; i<sArray.length; i++){
    if(sArray[i] === '!'){
      sArray.splice(i, 1)
    }
  }
  return sArray.join('')
}

//passes in the test, fails on the attempt with "Hello World!"

function removeExclamationMarks(s) {
    let sArray = s.split('')
    for(let i = 0; i<sArray.length; i++){
      if(sArray[i] === '!'){
        sArray.splice(i, 1, '')
      }
    }
    return sArray.join('')
  }

  //passes :)