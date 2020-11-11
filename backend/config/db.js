import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log(`Connect to MongoDB successfully at ${connection.connection.host}`.success);
    } catch(error) {
        console.log(`ERROR : ${error.message}`);
    }
}

export default connectDB;