const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`
    <form action='http://localhost:3000/multiply' method='POST'>
      <input type='text' name='num1'>
      <input type='text' name='num2'>
      <input type='submit' value='Multiply Numbers'>
    </form>
  `);
});

app.post("/multiply", (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const product = num1 * num2;
  res.send(`The product of ${num1} and ${num2} is ${product}`);
});

app.listen(3000);
