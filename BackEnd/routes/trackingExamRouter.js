const trackingExamController = require('../controllers/trackingExamController');

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
    
    app.post('/api/history/addTrackingExam',trackingExamController.createTrackingExam)

};