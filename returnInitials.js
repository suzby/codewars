function abbrevName(name){
    let firstName = name.split(' ')[0].toUpperCase()
    let lastName = name.split(' ')[1].toUpperCase()
    let initials = `${firstName[0]}.${lastName[0]}`
    return initials
  }

  /*
  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/