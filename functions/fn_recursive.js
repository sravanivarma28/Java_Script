
function foo(num) {
    if (num === 0) return 1;
    return num + foo(num - 1);
  }
  console.log(foo(3));
  /*
  The function works recursively:
foo(3) → 3 + foo(2)
foo(2) → 2 + foo(1)
foo(1) → 1 + foo(0)
foo(0) → 1
So, the total is 3 + 2 + 1 + 1 = 7.
  */