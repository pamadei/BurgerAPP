const express = require('express');
const router = express.Router();

// Order Model
const Order = require('../../models/Order');

// @route GET api/orders
// @des GET all orders
// @access private

router.get('/', (req, res) => {
  Order.find()
    .sort({date: 1})
    .then(orders => res.status(200).json(orders))
    .catch(err =>console.log(err))
});

// @route GET api/orders
// @des GET one specific order
// @access private

router.get('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then(order => res.status(200).json(order))
    .catch(err =>console.log(err))
});

// @route Post api/orders/:id
// @des Post a new order
// @access private

router.post('/', (req, res) => {
  const newOrder = new Order({
    ingredients: req.body.ingredients,
    totalPrice: req.body.totalPrice,
    orderNumber: Math.floor(Math.random()*10000),
    customer: req.body.customer
  });
  newOrder.save()
    .then(order => res.status(200).json(order))
    .catch(err => console.log(err))

});

// @route Delete api/orders/:id
// @des Delete a new order
// @access public

router.delete('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then(order => order.remove()
    .then(()=> res.status(200).json({orderRemoved: true, message: 'Order was removed'})))
    .catch(err => res.status(404).json({orderRemoved: false, message:'Order was not revemoved'}))
})
  


module.exports = router;