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

export {
    addOrder
}