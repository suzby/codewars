const binaryArrayToNumber = arr => {
    let int = 0
    let sumInt = arr.reduce((previousValue, currentValue)=>(previousValue * 2) + currentValue, int)
    return sumInt
    };

    /*
    Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

BEST PRACTICE

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

*/
