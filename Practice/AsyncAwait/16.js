function Brhin() {
    console.log("Hello");
}

async function foo() {
    console.log('first');
    await Brhin()
    console.log('2');
    return 'hi';
}

foo().then(result => console.log(result));
console.log('4');
