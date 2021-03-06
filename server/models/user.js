const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  orders: {
    type: Array,
    required: true
  }
}, {collection: 'users'});


const User = module.exports = mongoose.model('User', orderSchema);
