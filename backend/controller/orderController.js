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
        totalPrice, 
        onSale } = req.body;

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
            totalPrice,
            onSale 
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
    const fetchedOrder = await Order.findById(id).populate('user', 'name email');

    if (fetchedOrder) {
        res.status(200).json(fetchedOrder);
    } else {    
        res.status(404);
        throw new Error('Can\'t find the Order, please try again');
    }
});

//?   PUT update order.isPaid to true
//?   /api/orders/:id
//?   Private Route
const updateOrderIsPaidStatus = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    const fetchedOrder = await Order.findById(id);

    if (fetchedOrder) {
        fetchedOrder.isPaid = true;
        fetchedOrder.paidAt = Date.now();
        fetchedOrder.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address
        }

        const updatedOrder = await fetchedOrder.save(); 

        res.status(200).json(updatedOrder);
    } else {    
        res.status(404);
        throw new Error('Can\'t find the Order, please try again');
    }
});

//?   GET orders based on one userID
//?   /api/orders/myorders
//?   Private Route
const getOrdersByUserId = AsyncHandler(async (req, res) => {
    const orders = await Order.find({
        user: req.user._id
    });
    res.json(orders);
});

//?   GET all orders
//?   /api/orders/allorders
//?   Private Route /Admin Route
const getAllOrders = AsyncHandler(async (req, res) => {
    const orders = await Order.find();

    if (orders) {
        res.status(200).send(orders);
    } else {
        res.status(400);
        throw new Error('Something is wrong, please try again');
    }
});

//? PUT orders isDelivered based on that Order ID
//? /api/orders/toggleIsDelivered
//? Private Route /Admin Route
const changeIsDeliveredStatus = AsyncHandler(async (req, res) => {
    const { id } = req.params;

    const fetchedOrder = await Order.findById(id);

    if (fetchedOrder) {
        fetchedOrder.isDelivered = !fetchedOrder.isDelivered;
        fetchedOrder.deliveredAt = Date.now();

        const updatedOrder = await fetchedOrder.save();
        res.status(200).send(updatedOrder);
    } else {
        res.status(400);
        throw new Error('This Order is not existed !');
    }
});

export {
    addOrder,
    getOrderById,
    updateOrderIsPaidStatus,
    getOrdersByUserId,
    getAllOrders,
    changeIsDeliveredStatus
}