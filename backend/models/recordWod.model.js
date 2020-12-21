const mongoose = require('mongoose');

let recordWodSchema = new mongoose.Schema({
    idUser: {
         type: String
     },
     idWod: {
         type: String
     },
     record: {
         type: Number
     },
     state: {
         type: String
     }
 });

 mongoose.model('RecordWod', recordWodSchema);
