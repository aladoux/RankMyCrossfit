const mongoose = require('mongoose');

let recordWodSchema = new mongoose.Schema({
    idUser: {
         type: String
     },
     idWod: {
         type: String
     },
     name: {
        type: String
     },
     record: {
         type: Number
     },
     state: {
         type: String
     },
     date: {
        type: Date
    },
    sexe: {
        type: String
    },
    nameUs: {
        type: String
    }
 });

 mongoose.model('RecordWod', recordWodSchema);
