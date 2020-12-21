const mongoose = require('mongoose');

let recordWeiSchema = new mongoose.Schema({
    idUser: {
         type: String
     },
     idWei: {
         type: String
     },
     record: {
         type: Number
     },
     state: {
         type: String
     }
 });

 mongoose.model('RecordWei', recordWeiSchema);
