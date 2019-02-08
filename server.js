const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/pancakes_controller");
app.use(routes);

app.listen(PORT, () => {
    console.log('\nApp now listening at http://localhost:' + PORT);
  });
  