function xor(a, b) {
    if(a == true && b == true){
      return false
    }
    else if(a == true || b == true){
      return true
    } 
    else {
      return false
    }
  }

  //or 

  function xor(a, b) {
    return a != b;
  }