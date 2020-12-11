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
    displaySizeInches: {
        type: String, 
        required: true
    },
    resolutionPixels: {
        type: String, 
        required: true
    },
    screenResolution: {
        type: String, 
        required: true
    },
    displayType: {
        type: String, 
        required: true
    },
    proccessorType: {
        type: String, 
        required: true
    },
    proccessorCores: {
        type: String, 
        required: true
    },
    processorMemoryCache: {
        type: String, 
        required: true
    },
    processorClockSpeed: {
        type: String, 
        required: true
    },
    processorMaxClockSpeed: {
        type: String, 
        required: true
    },
    graphicsProcessor: {
        type: String, 
        required: true
    },
    ram: {
        type: String, 
        required: true
    },
    ssdStorage: {
        type: String, 
        required: true
    },
    usbTwoPointOPorts: {
        type: String, 
        required: true
    },
    usbCPorts: {
        type: String, 
        required: true
    },
    cardReader: {
        type: String, 
        required: true
    },
    webCam: {
        type: String, 
        required: true
    },
    wifi: {
        type: String, 
        required: true
    },
    operatingSystem: {
        type: String, 
        required: true
    },
    manufacturersWarantty: {
        type: String, 
        required: true
    }
})

const laptopSchema = mongoose.Schema({
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
    },
    details: [laptopDetailSchema]
}, {
    timestamps: true
});

const Laptop = mongoose.model('Laptop', laptopSchema);
export default Laptop;