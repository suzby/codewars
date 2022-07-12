function getRealFloor(n) {
    if (n > 0 && n <= 13) {
      n -= 1
    } else if( n > 13) {
      n -= 2
    }
    return n
  }

  //or 

  function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }