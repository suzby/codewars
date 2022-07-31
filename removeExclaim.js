function remove (string) {
  let holdString = string.split('')
  if(holdString[holdString.length-1] == '!'){ 
    let sliceAt = holdString.length-1
     return holdString.slice(0,sliceAt).join('')
    

  }
  return string;
}

// or 
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}