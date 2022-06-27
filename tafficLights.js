function updateLight(current) {
    let output = ['green', 'yellow','red']
    if (current === 'green'){
    return output[1]
  } else if(current === 'yellow'){
    return output[2]
  } else if (current === 'red'){
    return output[0] 
    }
  }

  //or  

  
  function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }