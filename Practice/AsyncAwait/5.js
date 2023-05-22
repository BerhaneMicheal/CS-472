async function foo() {
    try {
      console.log('1');
      let value = await Promise.reject('Rejected value');
      console.log('2');
      return '3';
    } catch(error) {
      console.error('Error:', error);
      return 'Error handled';
    }
  }
  
  foo().then(result => console.log(result));
  console.log('4');
  