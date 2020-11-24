import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Wod from './models/wod';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());



mongoose.connect('mongodb://localhost:27017/RankMyCrossfit');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/wods').get((req, res) => {
    Wod.find((err, wods) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(wods);
        }
    });
});

router.route('/wods/:id').get((req, res) => {
    Wod.findById(req.params.id, (err, wod) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(wod);
        }
    });
});

router.route('/wods/add').post((req, res) => {
    let wod = new Wod(req.body);
    wod.save()
        .then(wod => {
            res.status(200).json({'wod': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create a new record');
        });
});

router.route('/wods/update/:id').post((req, res) => {
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
});


router.route('/wods/delete/:id').get((req, res) => {
    Wod.findByIdAndRemove({_id: req.params.id}, (err, wod) => {
        if(err){
            res.json(err);
        }
        else{
            res.json('Remove successfully');
        }
    })
})


app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));
