import AsyncHandler from 'express-async-handler';
import Order from '../models/order.js';

//?   Create an order
//?   /api/orders
//?   Private Route
const addOrder = AsyncHandler(async (req, res) => {
    const { 
        orderItems, 
        shippingAddress, 
        paymentMethod, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice } = req.body;

        if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items'); 
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id, 
            shippingAddress, 
            paymentMethod, 
            itemsPrice, 
            taxPrice, 
            shippingPrice, 
            totalPrice 
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
}) 

//?   GET an order by ID
//?   /api/orders/:id
//?   Private Route
const getOrderById = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const fetchedOrder = await Order.findById(id).populate('user', 'name email');
    console.log(fetchedOrder);

    if (fetchedOrder) {
        res.status(200).json(fetchedOrder);
    } else {    
        res.status(404);
        throw new Error('Can\'t find the Order, please try again');
    }
});

export {
    addOrder,
    getOrderById
}