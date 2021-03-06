String.prototype.toJadenCase = function () { 
    let words = this.split(" ")
    let capitalizedWords = []
    words.forEach(word=>{
                  capitalizedWords.push(word[0].toUpperCase()+word.slice(1,word.length))
                  })
    
  return capitalizedWords.join(' ')
    
  }
  
//R2

String.prototype.toJadenCase = function () {
  let words = this.split(' ')
  let newArr = []
  for(let i = 0;i<words.length;i++){
    newArr.push(words[i][0].toUpperCase() + words[i].slice(1))
     }
  return newArr.join(' ')
};



  /*
  Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

"BEST PRACTICE"
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
*/