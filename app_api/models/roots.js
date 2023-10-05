const mongoose = require('mongoose');
const rootsschema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: Number,
  mrp: Number,
  quantity: String,
});
mongoose.model('roots', rootsschema);