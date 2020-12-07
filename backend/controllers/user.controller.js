const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req,res,next) => {
    var user = new User();
    user.email = req.body.email;
    user.username = req.body.username;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = req.body.password;
    user.dateNaiss = req.body.dateNaiss;
    user.nation = req.body.nation;
    user.sexe = req.body.sexe;
    user.type = req.body.type;
    console.log(user);
    user.save((err, doc) => {
        if(!err){
            res.send(doc);
        }
        else{
            console.log(err);
            if (err.code == 11000){
                res.status(500).send(['Duplicate email adrress found.']);
            } 
            else{
                 return next(err);
            }
               
        }
    });
}

module.exports.authenticate = (req, res, next) => {
    //call for passport authentification
    passport.authenticate('local', (err, user, info) => {
        //error from passport middleware
        if(err){
            return res.status(400).json(err);
        }
        //registered user
        else if (user){
            return res.status(200).json({"token": user.generateJwt() });
        }
        //unknown user or wrong password
        else{
            return res.status(404).json(info);
        }
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({_id: req._id},
            (err, user) => {
                if(!user){
                    return res.status(404).json({ status: false, message: 'User record not found.'});
                }
                else{
                    return res.status(200).json({ status: true, user: _.pick(user,['username','email']) });
                }
            }
        );
}