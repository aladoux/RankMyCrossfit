const mongoose = require('mongoose');

const RecordWod = mongoose.model('RecordWod');

module.exports.display = (req,res) => {
    RecordWod.find((err, recordWod) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWod);
        }
    })
}

module.exports.displayId = (req,res) => {
    RecordWod.findById(req.params.id, (err, recordWod) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWod);
        }
    });
}


module.exports.add = (req, res) => {
    let recordWod = new RecordWod(req.body);
    recordWod.save()
        .then(recordWod => {
            res.status(200).json({'record wod': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create a new record');
        });
}

module.exports.update = (req, res) => {
    RecordWod.findById(req.params.id, (err, recordWod) => {
        if(!recordWod){
            return next(new Error('Could not load document'));
        }
        else{
            recordWod.record = req.body.record;
            recordWod.save().then(recordWod => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
}

module.exports.remove = (req, res) => {
    RecordWod.findByIdAndRemove({_id: req.params.id}, (err, recordWod) => {
        if(err){
            res.json(err);
        }
        else{
            res.json('Remove successfully');
        }
    })
}
