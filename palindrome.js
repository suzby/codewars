function isPalindrome(x) {
    let check = x.toLowerCase().split('').reverse().join('')
   if(check == x.toLowerCase()){
     return true
   } else {
     return false
   }
   
  }

  //tern

  const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }