const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.port || 3306;
const db = require("./models");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(require('./controller'));


db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("App listening on PORT " + PORT));
}).catch(err => console.log(err))
