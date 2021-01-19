const mongoose = require('mongoose');

const RecordWei = mongoose.model('RecordWei');

module.exports.display = (req,res) => {
    RecordWei.findBy((err, recordWei) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWei);
        }
    })
}

module.exports.displayUserId = (req,res) => {
    RecordWei.find({idUser: req.params.id}, (err, recordWei) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWei);
        }
    });
}

module.exports.displayId = (req,res) => {
    RecordWei.findById(req.params.id, (err, recordWei) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWei);
        }
    });
}

module.exports.displayPublicWoman = (req,res) => {
    RecordWei.find({idWei: req.params.id, state: "public", sexe:"woman"}, (err, recordWei) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWei);
        }
    }).sort({"record":-1});
}

module.exports.displayPublicMan = (req,res) => {
    RecordWei.find({idWei: req.params.id, state: "public", sexe:"man"}, (err, recordWei) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWei);
        }
    }).sort({"record":-1});
}

module.exports.displayByWeiUserId = (req, res) => {
 RecordWei.find({idUser: req.params.idUser, idWei: req.params.idWei}, (err, recordWei) => {
    if(err){
        console.log(err);
    }
    else{
        res.json(recordWei);
    }
 }).sort({"date":1}); 
}


module.exports.add = (req, res) => {
    let recordWei = new RecordWei(req.body);
    recordWei.save()
        .then(recordWei => {
            res.status(200).json({'record wei': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create a new record');
        });
}

module.exports.update = (req, res) => {
    RecordWei.findById(req.params.id, (err, recordWei) => {
        if(!recordWei){
            return next(new Error('Could not load document'));
        }
        else{
            recordWei.record = req.body.record;
            recordWei.date = req.body.date;
            recordWei.state = req.body.state;
            recordWei.save().then(recordWei => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
}

module.exports.remove = (req, res) => {
    RecordWei.findByIdAndRemove({_id: req.params.id}, (err, recordWei) => {
        if(err){
            res.json(err);
        }
        else{
            res.json('Remove successfully');
        }
    })
}


