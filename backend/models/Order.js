const moongose = require('mongoose');
const uuid = require('uuid/v4')
const Schema = moongose.Schema;

// Create Orders Schema //

const OrderSchema = new Schema({
  ingredients : {
    type: Object,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  orderNumber: {
    type: String,
    default: uuid()
  }
});

module.exports = Order = moongose.model('order', OrderSchema);
