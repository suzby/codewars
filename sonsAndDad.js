function twiceAsOld(dadYearsOld, sonYearsOld) {
    sonYearsOld *= 2
    if((dadYearsOld - sonYearsOld) > 0 ){
         return dadYearsOld - sonYearsOld 
      } else {
         return sonYearsOld - dadYearsOld
     }
  }