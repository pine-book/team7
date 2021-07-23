const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({

   event_name: {
     type: String,
     require: true
   },

   place_name: {
     type: String,
     require: true
   },

   time_from: {
     type: String,
     require: true
   },

   time_to: {
     type: String,
     require: true
   },

   job_tag: {
     type: String,
     require: true
   },

   comment: {
     type: String,
     require: true
   },

   date: {
     type: Date,
     default: Date.now
   }
});


module.exports = mongoose.model('Schedule', scheduleSchema);