const resultController = require('../controllers/resultController');


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });

    app.get('/api/result/getQuestResult/:userID/:examID/:turnID',resultController.getTrackingQuestInExam);

    app.get('/api/result/getScoreAndQuest/:userID/:examID/:turnID',resultController.getQuestionsAndCorrectQuest);

    app.get('/api/result/getResult/:turnID',resultController.getResult);

    app.post('/api/result/addResult',resultController.addResult);
};