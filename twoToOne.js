function longest(s1, s2) {
    let a = [... new Set(s1.split(""))];
    let b = [... new Set(s2.split(""))];
    for(let i=0;i<b.length; i++){
      a.push(b[i])
    }
     let initCombo = [... new Set(a)];
     let combo = initCombo.sort().join("")
     return combo
   }

   /*
   Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
   */

   //best practice:
   // const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')