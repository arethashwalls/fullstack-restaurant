const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/pancakes_controller");

app.use(routes);

app.listen(PORT, () => {
    console.log('\nApp now listening at http://localhost:' + PORT);
  });
  