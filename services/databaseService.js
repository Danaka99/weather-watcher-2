import mongoose from "mongoose";

const connectDB = async () => {
    console.log('Connecting to MongoDB...'.cyan);
    //mongoose.set('debug', true);  // Enable debugging
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected".green);
        //mongoose.connection.close();
    }catch (err) {
        const error = new Error('Cannot connect to the database\n'.red + err);
        error.status = 500;
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;