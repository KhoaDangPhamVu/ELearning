const passport = require('passport')

module.exports = function(req,res,next){
    passport.authenticate('jwt',function(err,user){
        if(err || !user){
            res.status(404).send({
                message: "You do not have priority to access to this resource",
                error: "You do not have priority to access to this resource."
            })
        }else{
            req.user = user
            next()
        }
    })(req,res,next)
}