const cluster = require(`cluster`);

if (cluster.isMaster) {
   let cpuCount = require(`os`).cpus().length;
   if (cpuCount > 4) {
     cpuCount = 4;
   }

   for (let i = 0; i < cpuCount; i += 1) {
     cluster.fork();
   }

   cluster.on(`exit`, (worker) => {
      console.log(`Worker ${worker.id} died, creating a new one!`);
      cluster.fork();
   });
} else {
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
}
