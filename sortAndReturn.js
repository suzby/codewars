function highAndLow(numbers){
    let numsString = numbers.split(' ')
    numsString.sort((a,b)=>a-b)
    return `${numsString[numsString.length - 1]} ${numsString[0]}` 
  }

  //or

  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }