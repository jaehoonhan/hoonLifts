const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user schema
const userSchema = new Schema({
    // Attributes and data types
    username: {
        type: String,
        required: true,
        unique:  true,
        trim: true,
        minlength: 3
    },
}, {
    // Create timestamp for each entry
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;