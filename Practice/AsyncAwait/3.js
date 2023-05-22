async function foo() {
    console.log('1');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('2');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('3');
    return '4';
  }
  
  foo().then(result => console.log(result));
  