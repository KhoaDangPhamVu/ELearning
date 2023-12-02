const profileController = require('../controllers/profileController');

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });

    app.get('/api/profile/getProfile/:userID',profileController.getProfileUser);
    app.patch('/api/profile/editProfile/:userID',profileController.editProfileUser);
    app.get('/api/profile/getFileID/:userID',profileController.getFileID);

    app.post('/api/profile/createProfile/:userID',profileController.createProfileUser);
    app.get('/api/profile/getImage/:fileID',profileController.getImage);
    app.post('/api/profile/saveImage/:userID/:fileID',profileController.saveImage);
    app.post('/api/profile/uploadImage',profileController.uploadImage);
    app.post('/api/profile/deleteImage/:fileID',profileController.deleteImage);
    app.get('/api/profile/getHistoryProfile/:userID',profileController.getHistoryProfile);
    app.get('/api/profile/getTotalTurns/:userID',profileController.getTotalTimeTakeQuiz);
};