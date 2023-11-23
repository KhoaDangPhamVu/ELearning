const questionController = require('../controllers/questionController');
const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post('/api/question/addQuestion/:examID',questionController.createQuestion);

    app.patch('/api/question/updateQuestion/:questID',questionController.updateQuestion);

    app.delete('/api/question/deleteQuestion/:questID',questionController.deleteQuestion);

    app.get('/api/question/getQuestions/:examID',questionController.getQuestionsInExam);

    app.get('/api/question/checkLimitQuest/:examID',questionController.getLimitQuest);
  };

// const router = require('express').Router()

// router.post('/addQuestion/:examID',questionController.createQuestion);

// router.patch('/updateQuestion/:questID',questionController.updateQuestion);

// router.delete('/deleteQuestion/:questID',questionController.deleteQuestion);

// router.get('/getQuestions/:examID',questionController.getQuestionsInExam);

// router.get('/checkLimitQuest/:examID',questionController.getLimitQuest);

// module.exports = router