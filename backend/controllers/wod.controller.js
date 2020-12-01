const mongoose = require('mongoose');

const Wod = mongoose.model('Wod');

module.exports.display = (req, res) => {
    Wod.find((err, wods) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(wods);
        }
    });
}

module.exports.displayId = (req, res) => {
    Wod.findById(req.params.id, (err, wod) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(wod);
        }
    });
}

module.exports.add = (req, res) => {
    let wod = new Wod(req.body);
    wod.save()
        .then(wod => {
            res.status(200).json({'wod': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create a new record');
        });
}

module.exports.remove = (req, res) => {
    Wod.findByIdAndRemove({_id: req.params.id}, (err, wod) => {
        if(err){
            res.json(err);
        }
        else{
            res.json('Remove successfully');
        }
    })
}

module.exports.update = (req, res) => {
    Wods.findById(req.params.id, (err, wod) => {
        if(!wod){
            return next(new Error('Could not load document'));
        }
        else{
            wod.name = req.body.name;
            wod.exercises = req.body.exercises;

            wod.save().then(wod => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
}