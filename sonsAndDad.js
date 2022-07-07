function twiceAsOld(dadYearsOld, sonYearsOld) {
    sonYearsOld *= 2
    if((dadYearsOld - sonYearsOld) > 0 ){
         return dadYearsOld - sonYearsOld 
      } else {
         return sonYearsOld - dadYearsOld
     }
  }

  //or
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }