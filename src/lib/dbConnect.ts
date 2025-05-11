import * as mongoose from "mongoose";

const dbConnect = async () => {
    const mongoUrl = process.env.MONGODB_URL;
    if (!mongoUrl) {
        throw new Error("MONGODB_URL environment variable is not set");
    }

    try {
        await mongoose.connect(mongoUrl);
    } catch (e) {
        console.error("MongoDB connection error:", e);
        throw new Error("Failed to connect to MongoDB");
    }
};

export default dbConnect;
