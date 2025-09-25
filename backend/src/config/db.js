import mongoose from 'mongoose'


export const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		console.log("Database connected successfully")
		
	} 
	catch(error){
		console.error("Error estabilishing connection" ,error);
		process.exit(1) // status code 1 means exit with failure
	}
}