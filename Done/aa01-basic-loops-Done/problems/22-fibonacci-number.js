/*
Write a function fib that accepts a number n as an argument. The function should
return the "n-th" number of the Fibonacci sequence. The first two numbers of the
Fibonacci sequence are 1; to generate subsequent numbers of the Fibonacci
sequence, we take the sum of the previous two numbers of the sequence.
*/

// 

function fib(n) {
    if(n == 0) {
        return 0;
    }
    if(n == 1) {
        return 1;
    }
    if (n == 2) {
        return 1;
    }
    let i = 3;
    let result = [1,1]
    while (i <= n) {
        nextResult = result[0] + result[1];
        result[0] = result[1];
        result[1] = nextResult;
        i++;
    }
    return result[1];
}
   // if (n == 1) {
     //   return 1;
    //}
    //if (n == 0) {
      //  return 0;
    //}
    //return fib(n-1)+fib(n-2);
//}

console.log(fib(1));    // 1
console.log(fib(2));    // 1
console.log(fib(3));    // 2
console.log(fib(4));    // 3
console.log(fib(5));    // 5
console.log(fib(6));    // 8
console.log(fib(10));   // 55
console.log(fib(11));   // 89
console.log(fib(12));   // 144

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fib;
