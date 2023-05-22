async function foo(n) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(n);
    return n + 1;
  }
  
  Promise.all([foo(1), foo(2), foo(3)]).then(results => console.log(results));
  