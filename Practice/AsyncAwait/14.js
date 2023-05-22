async function foo(){
    console.log('first');
    await new Promise (resolve => setTimeout(resolve('muna'), 100)).then(result => console.log(result));
    console.log('2');
    return 'hi'
    }
    foo().then(result => console.log(result));
    console.log('4');