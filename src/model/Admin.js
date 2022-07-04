const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const AdminSchema = new Schema({
  user_name: {
    type: String
  },
  
  password: {
    type: String,
    required: true
  },

})

module.exports = Admin = mongoose.model('admins', AdminSchema)