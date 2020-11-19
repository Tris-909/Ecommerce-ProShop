import AsyncHandler from 'express-async-handler';
import User from '../models/user.js';

//?   @description : Auth user & get token 
//?   @method : POST /api/users/login
//?   @access : public 
const login = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin:  user.isAdmin,
            token: null
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
}); 

export {
    login
}