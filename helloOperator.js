function arithmetic(a, b, operator){
    if(operator === "add"){
   return a + b
  } else if(operator === "subtract") {
    return a - b
  } else if(operator === "multiply") {
    return a * b
  } else if(operator === "divide"){
    return a / b
  } else {
    return "operator unknown"
  }
   
  }


  // or 
  /*
function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}
  */
