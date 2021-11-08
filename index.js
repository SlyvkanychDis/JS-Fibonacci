
let process = true;
let n = prompt ('Cheslo n');
while (process) {
  
  if (n === null) {
    process = false;
  } else if (!isNaN(+n) && n.length !== 0) {
    fibonacci(0, 1, +n);
    process = false;
  }
}
function fibonacci(f1, f2, n) {
    let fResult = 0;
    if (n === 1 || n === -1) fResult += 1;
    if (n >= 2) {
      for (let i = 2; i <= n; i++) {
        fResult = f1 + f2;
        f1 = f2;
        f2 = fResult;
      }
    }
    if (n <= -2) {
      for (let i = -2; i >= n; i--) {
        fResult = f1 - f2;
        f1 = f2;
        f2 = fResult;
      }
    }
    return alert(
      `n-е число в узагальненій послідовності Фібоначчі = ${fResult}`
    );
  }
  