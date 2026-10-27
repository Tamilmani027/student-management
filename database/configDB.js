import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB=async()=>{
	const connection=await mongoose.connect(process.env.MONGODB_URI);
	console.log("Connected to DB")
	return connection;
}

export default connectDB;