const mongoose = require('mongoose');

let recordWeiSchema = new mongoose.Schema({
    idUser: {
         type: String
     },
     idWei: {
         type: String
     },
     perf: {
         type: Number
     },
     state: {
         type: String
     }
 });

 mongoose.model('RecordWei', recordWeiSchema);
