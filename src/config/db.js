import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, (err) => {
    err
        ? console.log("Error, mongoDB not connected")
        : console.log("Mongo DB connected")
})

export default mongoose;
