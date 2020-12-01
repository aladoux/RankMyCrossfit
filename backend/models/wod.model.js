const mongoose = require('mongoose');



let wodSchema = new mongoose.Schema({
   name: {
        type: String
    },
   exercises: {
       type: Array
   }
});

mongoose.model('Wod', wodSchema);
