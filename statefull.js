const express = require(`express`);
const app = express();

const random = Math.random();

app.get(`/state`, (req, res) => {
  for (let i=0; i< 1000000; i += 1) {
    console.log(`my number: ${i}`);
  }
  res.send(`my number is: ${random}`);
});

app.listen(3000, () => `Listen 3000`);
