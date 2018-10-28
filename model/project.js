var mongoose = require('mongoose');

// Basic schema for Mongo
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true},
    number: { type: String, required: true },
    manager: { type: String, required: true },
    staff: { type: Array, required: true},
    start_date: { type: Date},
    due_date: { type: Date},
    company: { type: String, required: true}
});
// duedate and startdate were missing in many project details, thus not required.
// Only 7 fields need to show on the view, thus no extra fields.

module.exports = mongoose.model('Project', projectSchema );