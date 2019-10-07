const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4')

// Order Model
const Order = require('../../models/Order');

// @route GET api/orders
// @des GET all orders
// @access private

router.get('/', (req, res) => {
  Order.find()
    .sort({date: -1})
    .then(orders => res.status(200).json(orders))
    .catch(err =>console.log(err))
});

// @route Post api/order
// @des Post a new order
// @access private

router.post('/', (req, res) => {
  const newOrder = new Order({
    ingredients: req.body.ingredients,
    totalPrice: req.body.totalPrice,
    orderNumber: uuid()
  });
  newOrder.save()
    .then(order => res.status(200).json(order))
    .catch(err => console.log(err))

});

// @route Delete api/order
// @des Delete a new order
// @access public

router.delete('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then(order => order.remove()
    .then(()=> res.status(200).json({orderRemoved: true, message: 'Order was removed'})))
    .catch(err => res.status(404).json({orderRemoved: false, message:'Order was not revemoved'}))
})
  


module.exports = router;