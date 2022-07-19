function problem(x){
    if (typeof x == 'string' ){
     return  "Error"
     } else {
       return x * 50 + 6
     }
   }

   //tern it up

   const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;