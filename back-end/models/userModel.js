// Set up mongoose // 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reminderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    job:{
        type: String,
        required: true
    },
    objectives:{
        type: String,
        required: true
    },
    image: {
        type: String,
        requried: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Reminders", reminderSchema);