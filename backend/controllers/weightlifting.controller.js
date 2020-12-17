const mongoose = require('mongoose');

const Weightlifting = mongoose.model('Weightlifting');

module.exports.display = (req,res) => {
    Weightlifting.find((err, weightliftings) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(weightliftings);
        }
    })
}

module.exports.displayId = (req,res) => {
    Weightlifting.findById(req.params.id, (err, weightlifting) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(weightlifting);
        }
    });
}

module.exports.add = (req, res) => {
    let weightlifting = new Weightlifting(req.body);
    console.log("coucou"+ req.body);
    weightlifting.save()
        .then(weightlifting => {
            res.status(200).json({'weightlifting': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create a new record');
        });
}

module.exports.update = (req, res) => {
    Weightlifting.findById(req.params.id, (err, weightlifting) => {
        if(!weightlifting){
            return next(new Error('Could not load document'));
        }
        else{
            weightlifting.name = req.body.name;
            weightlifting.desc = req.body.desc;
            weightlifting.tips = req.body.tips;
            weightlifting.save().then(weightlifting => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
}

module.exports.remove = (req, res) => {
    Weightlifting.findByIdAndRemove({_id: req.params.id}, (err, weightlifting) => {
        if(err){
            res.json(err);
        }
        else{
            res.json('Remove successfully');
        }
    })
}