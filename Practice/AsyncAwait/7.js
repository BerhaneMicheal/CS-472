async function foo(n) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(n);
    return n + 1;
  }
  
  foo(1).then(result => console.log(result));
  foo(2).then(result => console.log(result));
  foo(3).then(result => console.log(result));
  