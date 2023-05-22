async function foo() {
    console.log('1');
    await new P(resolve => setTimeout(resolve, 1000));
    console.log('2');
    return '3';
  }
  
  foo().then(result => console.log(result));
  console.log('4');
  