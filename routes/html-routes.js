const path = require("path");

module.exports = function (app) {
  //gets page with exercise options/input
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  //gets the Dashboard page. 
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  //goes to app main page or substitute main page for current workout. 
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};