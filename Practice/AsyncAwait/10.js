async function foo(n) {
    await new Promise(resolve => setTimeout(resolve, n * 1000));
    console.log(n);
    return n + 1;
  }
  
  Promise.race([foo(1), foo(2), foo(3)]).then(result => console.log(result));
  