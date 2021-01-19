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
    });
}

module.exports.displayByWodUserId = (req, res) => {
    RecordWod.find({idUser: req.params.idUser, idWod: req.params.idWod}, (err, recordWod) => {
       if(err){
           console.log(err);
       }
       else{
           res.json(recordWod);
       }
    }).sort({"date":1}); 
   }

module.exports.displayUserId = (req,res) => {
    RecordWod.find({idUser: req.params.id}, (err, recordWod) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWod);
        }
    });
}

module.exports.displayId = (req,res) => {
    RecordWod.find({idWod: req.params.id}, (err, recordWod) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWod);
        }
    });
}

module.exports.displayPublicWoman = (req,res) => {
    RecordWod.find({idWod: req.params.id, state: "public", sexe:"woman"}, (err, recordWod) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWod);
        }
    }).sort({"record":1});
}

module.exports.displayPublicMan = (req,res) => {
    RecordWod.find({idWod: req.params.id, state: "public", sexe:"man"}, (err, recordWod) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(recordWod);
        }
    }).sort({"record":1});
}

module.exports.displayPublicByWodId = (req,res) => {
    RecordWod.find({idWod: req.params.idWod, state: "public"}, (err, recordWod) => {
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
            recordWod.date = req.body.date;
            recordWod.state = req.body.state;
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


