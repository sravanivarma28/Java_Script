let x = 10;
let y = (x++, x + 1, x * 2);
console.log(y);

/*
Explanation:

The comma operator ( , ) evaluates all expressions but returns the value of the last one.
x++ increments x to 11, but the result of this expression is the original 10.
x + 1 becomes 11 + 1 = 12, and the final expression x * 2 evaluates to 11 * 2 = 22, which is assigned to y.
*/