for (let i = 0; i < 3; i++) {
    async function foo(n) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(n);
      return n + 1;
    }
  
    foo(i).then(result => console.log(result));
  }
  