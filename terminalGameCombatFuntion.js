function combat(health, damage) {
    let newHealth = health - damage
    if(newHealth >= 0){
      return newHealth
    } else {
      return 0
    }
  }