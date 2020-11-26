import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Weightlifting = new Schema({
   name: {
        type: String
    }
});

export default mongoose.model('Weightlifting', Weightlifting);
