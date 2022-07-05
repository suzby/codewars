function feast(beast, dish) {
    let beastLetters = [beast[0], beast[beast.length-1]]
    let dishLetters = [dish[0], dish[dish.length-1]]
    if(beastLetters[0] === dishLetters[0] && beastLetters[1] === dishLetters[1]){
      return true
    } else {
      return false
    }
  }

  //0r

  function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  }