// Checks if the ratio between two values is approximatley equal the golden ratio.
function checkGoldenRatio(x,y) {
  const goldenRatio = ((1 + Math.sqrt(5)) / 2).toFixed(6); // calculate the golden ratio
  const result = x > y ? (x / y).toFixed(6) : (y / x).toFixed(6); // divide the input number by the golden ratio

  if (goldenRatio === result) { return result; }
  else { return null; }
}

// console.log("The Squre Root of 5 is: ", Math.sqrt(5));
// console.log("The Sum of Sqrt(5) + 1 is: ", Math.sqrt(5) + 1);
// console.log("The Golden Ration: ",((1 + Math.sqrt(5)) / 2).toFixed(6));

// This function recives a number and retuns the next number to it considering the golden ratio between both of them.
function getOtherNum(num) {
    const phi = (1 + Math.sqrt(5)) / 2;
    
    return phi * num;
}

console.log("\n", getOtherNum(10));
console.log(checkGoldenRatio(10, 16.18033988749895));
