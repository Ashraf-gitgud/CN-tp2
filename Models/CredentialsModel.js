const mongoose = require('mongoose');

const credSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('Credentials', credSchema);
