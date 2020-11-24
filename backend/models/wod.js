import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Wod = new Schema({
   name: {
        type: String
    },
   exercises: {
       type: Array
   }
});

export default mongoose.model('Wod', Wod);
