const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define userSchema using mongoose
const userSchema = new Schema({
    // Attributes and data types
    username: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'invalid username'],
        required: true,
        unique:  true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'invalid email'],
        required: true,
        unique:  true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, {
    // Create timestamp for each entry
    timestamps: true,
});

//
const User = mongoose.model('User', userSchema);

module.exports = User;