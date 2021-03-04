import AsyncHandler from 'express-async-handler';
import User from '../models/user.js';
import Order from '../models/order.js';
import { AppError } from '../utils/appError.js';

//?   Create an order
//?   /api/orders
//?   Private Route
const addOrder = AsyncHandler(async (req, res, next) => {
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
        next(new AppError('No order items', 400));
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

        const currentUser = await User.findById(req.user._id);

        currentUser.cartList = [];

        await currentUser.save();
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
}) 

//?   GET an order by ID
//?   /api/orders/:id
//?   Private Route
const getOrderById = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const fetchedOrder = await Order.findById(id).populate('user', 'name email');

    if (fetchedOrder) {
        res.status(200).json(fetchedOrder);
    } else {    
        next(new AppError('Can\'t find the Order, please try again', 404))
    }
});

//?   PUT update order.isPaid to true
//?   /api/orders/:id
//?   Private Route
const updateOrderIsPaidStatus = AsyncHandler(async (req, res, next) => {
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
        next(new AppError('Can\'t find the Order, please try again', 404));
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
const getAllOrders = AsyncHandler(async (req, res, next) => {
    const orders = await Order.find();

    if (orders) {
        res.status(200).send(orders);
    } else {
        next(new AppError("Can't fetch all order as Admin", 500));
    }
});

//? PUT orders isDelivered based on that Order ID
//? /api/orders/toggleIsDelivered
//? Private Route /Admin Route
const changeIsDeliveredStatus = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const fetchedOrder = await Order.findById(id);

    if (fetchedOrder) {
        fetchedOrder.isDelivered = !fetchedOrder.isDelivered;
        fetchedOrder.deliveredAt = Date.now();

        const updatedOrder = await fetchedOrder.save();
        res.status(200).send(updatedOrder);
    } else {
        next(new AppError(`This Order is not existed based on this ID : ${id}!`, 404));
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