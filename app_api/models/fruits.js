const mongoose = require('mongoose');
const fruitsschema = new mongoose.Schema({
  image: String,
  name: {
    type: String,
    required: true
  },
  price: Number,
  mrp: Number,
  quantity: String,
});
mongoose.model('fruits', fruitsschema);