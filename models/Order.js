const moongose = require('mongoose');
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
    required: true,
  },
  customer: {
    type:Object,
  }
});

module.exports = Order = moongose.model('order', OrderSchema);
