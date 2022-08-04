var capitals = function (word) {
    let compareWord = word.toLowerCase().split('')
     word = word.split('')
     let indices = []
  for(let i = 0; i<word.length;i++){
    if(word[i] != compareWord[i]){
      indices.push(i)
    }
  }
  return indices
};

// slightly slicker:

var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };