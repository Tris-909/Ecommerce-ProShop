import AsyncHandler from 'express-async-handler';
import Laptop from '../models/laptops.js';

//?   Fetch All Laptops from databases
//?   /api/laptops
//?   Public Route
const getLaptops = AsyncHandler(async (req, res) => {
        const laptops = await Laptop.find();

        if (laptops) {
            res.status(200);
            res.send(laptops);
        } else {
            res.status(404);
            throw new Error("No data about laptops found !");
        }
});

//?   Fetch Laptops from databases based on ID
//?   /api/laptops/:id
//?   Public Route
const getSingleLaptop = AsyncHandler(async (req, res) => {
    const laptop = await Laptop.findById(req.params.id);

    if (laptop) {
        res.status(200);
        res.send(laptop);
    } else {
        res.status(404);
        throw new Error("No data about this laptop is found !");
    }
});

export {
    getLaptops,
    getSingleLaptop
}