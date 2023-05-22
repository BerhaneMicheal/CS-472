async function foo() {
    console.log('1');
    let value = await Promise.resolve('Resolved value 1');
    console.log(value);
    value = await Promise.resolve('Resolved value 2');
    console.log(value);
    return '3';
  }
  
  foo().then(result => console.log(result));
  console.log('4');
  