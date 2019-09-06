const path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/welcome.html"));
  });

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });
      // app.get("/api/tasks", function(req, res) {
      //   res.sendFile(path.join(__dirname, "../public/allTasks.html"));
      // });

  app.get("/goals", function (req, res) {    //who dis?
    res.sendFile(path.join(__dirname, "../public/allGoals.html"));
  });

  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  })
}