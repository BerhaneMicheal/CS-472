async function foo() {
    console.log('1');
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    console.log('2');
    return '3';
  }
  
  async function bar() {
    console.log('4');
    await new Promise((resolve, reject) => setTimeout(() => reject('Error!'), 2000));
    console.log('5');
    return '6';
  }
  
  foo().then(result => console.log(result));
  bar().then(result => console.log(result)).catch(error => console.log(error));
  