const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongodb = require("./db/connect");
const routes = require("./routes");
// import { router } from './routes/index.js';

app.use('/', routes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
