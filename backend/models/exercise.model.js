const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define exercise Schema
const exerciseSchema = new Schema({
    // Attributes and data types
    username: { type: String, required: true },
    description: { type: String, required: true},
    duration: { type: Number, required: true },
    date: { type: Date, required: true},
}, {
    // Create timestamp for each entry
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;