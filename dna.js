function DNAStrand(dna){
    let complement = dna.split('')
     for (let i = 0; i < complement.length; i++){
       if(complement[i] == 'A'){
         complement[i] = 'T'
       } else if (complement[i] == 'T'){
         complement[i] = 'A'
       }else if (complement[i] == 'C'){
         complement[i] = 'G'
       } else if (complement[i] == 'G'){
         complement[i] = 'C'
       }
     }
     return complement.join('')
   }

   //alt

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}