const mongoose = require('mongoose');



let weightliftingSchema = new mongoose.Schema({
   name: {
        type: String
    },
    desc: {
        type: String
    }
});

mongoose.model('Weightlifting', weightliftingSchema);
