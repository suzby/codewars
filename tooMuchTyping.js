function points(games) {
    let pointsTotal = 0
    for(let i=0;i<games.length;i++){
      
      if(games[i] === "0:0" || games[i] === "1:1" || games[i] === "2:2" || games[i] === "3:3" || games[i] === "4:4"){
        pointsTotal += 1
      } else if(games[i] === "1:0" || games[i] === "2:0" || games[i] === "2:1" || games[i] === "3:0" || games[i] === "3:1" || games[i] === "3:2" || games[i] === "4:0" || games[i] === "4:1" || games[i] === "4:2" || games[i] === "4:3" ){
        pointsTotal += 3
      } else {
        pointsTotal +=0
      }
    }
    return pointsTotal
  }

  
/*
  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)
*/


// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }