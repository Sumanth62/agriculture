const mongoose = require('mongoose');
const  vegtablesschema = new mongoose.Schema({
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
mongoose.model('vegtables', vegtablesschema);