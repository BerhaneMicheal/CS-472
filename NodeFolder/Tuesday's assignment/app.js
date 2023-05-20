const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    console.log('here');
    //res.sendFile('index.html');
});

app.post('/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operation = req.body.operation;
    let result;

    console.log(req.body)
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            res.status(400).send('Invalid operation');
            return;
    }

    res.send(`The answer is: ${result} <br/> <a href="/">Another calculation</a>`);
});

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});
