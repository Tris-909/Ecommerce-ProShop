import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    wishList: [
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            productName: {
                type: String,
                required: true
            },
            productPrice: {
                type: Number,
                required: true
            },
            productImage: {
                type: String,
                required: true
            },
            productRating: {
                type: Number,
                required: true
            },
            productNumReviews: {
                type: Number,
                required: true
            }
        }
    ],
    cartList: [
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            productName: {
                type: String,
                required: true
            },
            productImage: {
                type: String,
                required: true
            },
            productPrice: {
                type: Number,
                required: true
            },
            onSale: {
                type: Number,
                required: true
            },
            countInStock: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    agreeAndDisAgree: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            reviewId: {
                type: String,
                required: true
            },
            agree: {
                type: Boolean,
                required: true
            }
        }
    ]
}, {
    timestamps: true
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;