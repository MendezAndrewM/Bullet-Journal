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

  app.get("/tasks", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/allTasks.html"));
  });

  app.get("/weekly", function (req, res) {    //who dis?
    res.sendFile(path.join(__dirname, "../public/weekly.html"));
  });

  app.get("/monthly", function (req, res) {    //who dis?
    res.sendFile(path.join(__dirname, "../public/monthly.html"));
  });

  app.get("/daily", function (req, res) {    //who dis?
    res.sendFile(path.join(__dirname, "../public/daily.html"));
  });



}