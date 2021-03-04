import mongoose from 'mongoose';

const storeInfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const StoreInfo = mongoose.model('StoreInfo', storeInfoSchema);
export default StoreInfo;