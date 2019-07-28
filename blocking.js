const express = require(`express`);
const app = express();

app.get(`/count-to-n`, (req, res) => {
  const n = req.query.n;

  for (let i = 0; i < n; i++) {
    console.log(`Iter ${i}`);
  }

  res.sendStatus(200);
});

app.get(`/count-to-n2`, (req, res) => {
  const n = req.query.n;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(`Iter ${i}.${j}`);
    }
  }

  res.sendStatus(200);
});

app.listen(3000, () => console.log(`Listening localhost:3000`));
