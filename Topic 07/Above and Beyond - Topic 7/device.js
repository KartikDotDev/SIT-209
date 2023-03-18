const mongoose = require('mongoose');

module.exports = mongoose.model('Device', new mongoose.Schema({
  id: String,
  name: String,
  sensorData: Array
}, { collection : 'topic7' }));
