const mongoose = require('mongoose');

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
    user.save((err, doc) => {
        if(!err){
            res.send(doc);
        }
        else{
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
    });
}