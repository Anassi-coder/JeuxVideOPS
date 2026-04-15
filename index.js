const express = require('express');
const Calculator = require('./modules/calculator');

const app = express();
const calc = new Calculator();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Calculator API!');
});

app.get('/add', (req, res) => {
  res.send(`${req.query.a} + ${req.query.b} = ${calc.add(
      parseFloat(req.query.a),
      parseFloat(req.query.b),
  )}`);
});

app.get('/sub', (req, res) => {
  res.send(`${req.query.a} - ${req.query.b} = ${calc.subtract(
      parseFloat(req.query.a),
      parseFloat(req.query.b),
  )}`);
});

app.get('/mult', (req, res) => {
  res.send(`${req.query.a} * ${req.query.b} = ${calc.multiply(
      parseFloat(req.query.a),
      parseFloat(req.query.b),
  )}`);
});

app.get('/div', (req, res) => {
  try {
    res.send(`${req.query.a} / ${req.query.b} = ${calc.divide(
        parseFloat(req.query.a),
        parseFloat(req.query.b),
    )}`);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get('/pow', (req, res) => {
  res.send(`${req.query.a} ^ ${req.query.b} = ${calc.power(
      parseFloat(req.query.a),
      parseFloat(req.query.b),
  )}`);
});

const server = app.listen(PORT, () => {
  console.log(`Calculator app listening on port ${PORT}`);
});

module.exports = {app, server};
