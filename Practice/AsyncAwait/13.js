async function logAfterDelay(msg, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(msg);
        resolve();
      }, delay);
    });
  }
  
  async function foo() {
    console.log('1');
    await logAfterDelay('2', 1000);
    console.log('3');
  }
  
  foo();
  console.log('4');
  