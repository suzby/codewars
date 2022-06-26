function sumArray(array) {
    if(array === null || array === undefined || array.length <= 2 ) {
      return 0
    } else{
      let arraySort = array.sort((a,b)=> a-b)
      arraySort.shift()
      arraySort.pop()
      let initialValue = 0
      initialValue = arraySort.reduce((c,d)=> c+d,0)
      return initialValue
    }
    
    }
// or
    function sumArray(array) {
        if (array == null) {
          return 0;
        } else if (array.length < 2) {
          return 0;
        } else {
          array = array.sort(function(a,b) {return a - b;});
          var total = 0;
          for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
          }
          return total;
        }
      }