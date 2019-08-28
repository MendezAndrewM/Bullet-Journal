const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require(/* HTML Route Needed Here */)(app);
require(/* API Route Needed Here */)(app);
require(/* POST API Route Needed Here */)(app);


db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT:${PORT}`));
});