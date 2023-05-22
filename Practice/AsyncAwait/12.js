// This function returns a promise that resolves after 1 second
function delayOneSecond() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Our async function uses the delay function
  async function foo() {
    console.log('1');
    await delayOneSecond(); // Here we await the promise returned by delayOneSecond
    console.log('2');
    return '3';
  }
  
  foo().then(result => console.log(result));
  console.log('4');
  