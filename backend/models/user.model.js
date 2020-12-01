const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'Email can\'t be empty',
        minLength: [1,'Must be atleast 1 character long'],
        unique: true,
        trim: true,
    },
    username: {
        type: String,
        required: 'Username can\'t be empty',
        minLength: [4, 'Must be atleast 4 character long'],
        unique: true,
    },
    firstName: {
        type: String,
        required: 'Firstname can\'t be empty',
        minLength: 1,
    },
    lastName: {
        type: String,
        required: 'Lastname can\'t be empty',
        minLength: 1,
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minLength: 6,
    },
    dateNaiss: {
        type: String,
        required: 'Date can\'t be empty',
    },
    nation: {
        type: String,
        required: 'Nation can\'t be empty',
    },
    sexe: {
        type: String,
        required: 'Sexe can\'t be empty',
    },
    recordWod: {
        type: Array,
    },
    recordWeightlifting: {
        type: Array,
    },
    type: {
        type: String,
    },
   saltSecret:String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

//Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('User', userSchema);
