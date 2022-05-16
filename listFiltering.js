function filter_list(l) {
    let newArr = []
    for(let i=0;i<l.length;i++) {
      if (typeof l[i] == "number"){
        newArr.push(l[i])
      }   
    }
    return newArr
    }
  
    
    /*
    In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
    "BEST PRACTICE":

    function filter_list(l) {
        return l.filter(function(v) {return typeof v == 'number'})
    }
    
    */