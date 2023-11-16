const questionHistoryController = require('../controllers/examHistoryController');


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post('/api/history/addQuestHistory',questionHistoryController.createQuestHistory);

};