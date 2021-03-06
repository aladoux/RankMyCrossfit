const mongoose = require('mongoose');

let recordWeiSchema = new mongoose.Schema({
    idUser: {
         type: String
     },
     idWei: {
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

 mongoose.model('RecordWei', recordWeiSchema);
