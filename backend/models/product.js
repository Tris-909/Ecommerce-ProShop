import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String, required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    numOfAgrees: {
        type: Number,
        required: true,
        default: 0
    },
    agree: [
        { 
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            }
        }
    ],
    numOfDisAgrees: {
        type: Number,
        required: true,
        default: 0
    },
    disAgree: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            }
        }
    ]
}, {
    timestamps: true
});

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    subImages: [String],
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    youtube: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    details: {
        type: Object,
        required: true
    },
    tvsDetail: {
        type: Object,
        required: true
    },
    phoneDetail: {
        type: Object,
        required: true
    },
    headphoneDetail: {
        type: Object,
        required: true
    },
    gameDetail: {
        type: Object,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    onSale: {
        type: Number,
        required: true,
        default: 0
    },
    newProduct: {
        type: Boolean,
        required: true,
        default: false
    },
    preOrder: {
        type: Boolean,
        required: true,
        default: false
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    numOf5StarsReviews: {
        type: Number,
        required: true,
        default: 0
    },
    numOf4StarsReviews: {
        type: Number,
        required: true,
        default: 0
    },
    numOf3StarsReviews: {
        type: Number,
        required: true,
        default: 0
    },
    numOf2StarsReviews: {
        type: Number,
        required: true,
        default: 0
    },
    numOf1StarsReviews: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;