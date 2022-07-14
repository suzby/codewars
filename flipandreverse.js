function reverseWords(str) {
    let flipIt = str.split(' ')
    let complete = []
    for(let i = 0; i<flipIt.length; i++){
     let word = flipIt[i].split('').reverse().join('')
     complete.push(word)
    }
    return complete.join(' ')
  }

  //or

  function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');