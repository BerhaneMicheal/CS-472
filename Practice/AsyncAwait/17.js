function sayMuna() {
    return new Promise(resolve => {
        resolve('Hello');
    });
}

async function foo() {
    console.log('first');
    await sayMuna().then(result => console.log(result));
    console.log('2');
    return 'hi';
}

foo().then(result => console.log(result));
console.log('4');

