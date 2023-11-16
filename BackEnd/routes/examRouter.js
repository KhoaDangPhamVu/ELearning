
const examController = require('../controllers/examController');
const isAuthenticated = require('../policies/isAuthenticated');
const { authJwt } = require("../middleware");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });
    app.post('/api/exam/addExam',examController.createExam,);

    app.get('/api/exam/getAllExams',examController.getAllExams);

    app.get('/api/exam/getExam/:examID', examController.getExam);

    app.patch('/api/exam/updateExam/:id', examController.updateExam);

    app.delete('/api/exam/deleteExam/:examID', examController.deleteExam);

    // app.post('/api/question/addQuestion/:examID',questionController.createQuestion);

    // app.patch('/api/question/updateQuestion/:questID',questionController.updateQuestion);

    // app.delete('/api/question/deleteQuestion/:questID',questionController.deleteQuestion);

    // app.get('/api/question/getQuestions/:examID',questionController.getQuestionsInExam);

    // app.get('/api/question/checkLimitQuest/:examID',questionController.getLimitQuest);
};


// const router = require('express').Router()

// router.post('/addExam', examController.createExam,);

// router.get('/getAllExams', examController.getAllExams);

// router.get('/getExam/:examID', examController.getExam);

// router.patch('/updateExam/:id', examController.updateExam);

// router.delete('/deleteExam/:examID', examController.deleteExam);

// module.exports = router