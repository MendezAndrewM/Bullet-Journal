const path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/welcome.html"));
  });

<<<<<<< HEAD
      app.get("/api/goals", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/goals.html"));
      });
=======
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });
>>>>>>> test

  app.get("/cms", function (req, res) {    //who dis?
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  })
}