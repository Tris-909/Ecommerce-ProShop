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
}, {
    timestamps: true
});

const laptopDetailSchema = mongoose.Schema({
    displaySizeInches: String,
    resolutionPixels: {
        type: String
    },
    screenResolution: {
        type: String
    },
    displayType: {
        type: String
    },
    proccessorType: {
        type: String
    },
    proccessorCores: {
        type: String
    },
    processorMemoryCache: {
        type: String 
    },
    processorClockSpeed: {
        type: String
    },
    processorMaxClockSpeed: {
        type: String
    },
    graphicsProcessor: {
        type: String
    },
    ram: {
        type: String
    },
    ssdStorage: {
        type: String 
    },
    usbTwoPointOPorts: {
        type: String
    },
    usbCPorts: {
        type: String 
    },
    cardReader: {
        type: String 
    },
    webCam: {
        type: String 
    },
    wifi: {
        type: String 
    },
    operatingSystem: {
        type: String 
    },
    manufacturersWarantty: {
        type: String 
    }
})

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
    reviews: [reviewSchema],
    details: {
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
    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;